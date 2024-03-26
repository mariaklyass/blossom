import clsx from "clsx";

type HeadingTwoProps = {
  children: React.ReactNode;
  className?: string;
};

const HeadingTwo = (props: HeadingTwoProps) => {
  const { children, className } = props;
  //for cases where font has leading, tracking etc
  return (
    <h2 className={clsx("max-w-3xl mt-10 mb-8", className)}>{children}</h2>
  );
};

export default HeadingTwo;
