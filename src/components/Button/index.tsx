import clsx from "clsx";
import Link from "@/components/Link";

interface Styles {
  base: string;
  size: {
    md: string;
    sm: string;
  };
  theme: {
    "primary-green-outline": string;
    "primary-green-filled": string;
    inactive: string;
  };
}

interface ButtonProps {
  as?: "a" | "button";
  className?: string;
  to?: string | null;
  disabled?: boolean;
  onClick?: VoidFunction;
  target?: string;
  type?: string;
  size: keyof Styles["size"];
  theme: keyof Styles["theme"];
  children?: React.ReactNode;
  [key: string]: any;
}

const styles = {
  base: "flex items-center justify-center rounded-3xl leading-none text-base font-semibold md:px-16 whitespace-nowrap duration-200 transition-colors",
  size: {
    md: "h-12",
    sm: "h-11",
  },
  theme: {
    "primary-green-outline":
      "bg-transparent border border-black tracking-tight-8 hover:bg-secondary-green hover:text-green-300 hover:border-transparent",
    "primary-green-filled":
      "bg-green-300 border border-black hover:bg-secondary-green hover:text-green-300",
    inactive: "bg-light-green text-light-grey border border-transparent",
  },
};

const Button: React.FC<ButtonProps> = ({
  as,
  className,
  to,
  disabled = false,
  onClick,
  target = "_blank",
  type,
  size,
  theme,
  children,
  ...otherProps
}) => {
  const Tag = to ? Link : "button";

  return (
    <Tag
      className={clsx(
        styles.base,
        styles.size[size],
        styles.theme[theme],
        className
      )}
      to={to}
      disabled={disabled}
      onClick={onClick}
      rel="noopener noreferrer"
      target={target}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};

export default Button;
