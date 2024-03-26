import clsx from "clsx";
import NextLink from "next/link";

interface Styles {
  transition: string;
  base: string;
  size: {
    md: string;
    sm: string;
  };
  theme: {
    default: string;
  };
}

interface LinkProps {
  className?: string;
  href?: string | null;
  size?: keyof Styles["size"] | null;
  theme?: keyof Styles["theme"] | null;
  children: React.ReactNode;
  [key: string]: any;
}

const styles: Styles = {
  transition: "transition-colors duration-200",
  base: "font-base hover:font-medium",
  size: {
    md: "tracking-tight-4 font-normal",
    sm: "tracking-tight-8 font-light",
  },
  theme: {
    default: "opacity-90",
  },
};

const Link: React.FC<LinkProps> = ({
  className: additionalClassName = null,
  href = null,
  size = null,
  theme = null,
  children,
  ...props
}) => {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName
  );

  if (href && href.toString().startsWith("/")) {
    return (
      <NextLink className={linkClassName} href={href} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={linkClassName} href={href?.toString()} {...props}>
      {children}
    </a>
  );
};

export default Link;
