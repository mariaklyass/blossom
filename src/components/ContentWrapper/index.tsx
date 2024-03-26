import clsx from "clsx";

type ContentWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const ContentWrapper = (props: ContentWrapperProps) => {
  const { children, className } = props;

  return (
    <div className={clsx("container flex max-w-7xl max-2xl:p-", className)}>
      {children}
    </div>
  );
};

export default ContentWrapper;
