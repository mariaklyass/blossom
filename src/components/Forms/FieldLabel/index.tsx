import clsx from "clsx";

type FieldLabelProps = {
  children: React.ReactNode;
  className?: string;
  htmlFor: string;
};

const FieldLabel = (props: FieldLabelProps) => {
  const { children, className, htmlFor } = props;

  return (
    <label
      className={clsx(
        `
        block
        uppercase
        tracking-wide
        text-gray-700
        text-xs
        font-bold
        mb-2
      `,
        className
      )}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default FieldLabel;
