type HeadingTagProps = {
  children: React.ReactNode;
};

const HeadingTag = (props: HeadingTagProps) => {
  const { children } = props;

  return (
    <div className="flex items-center">
      <hr className="border-black border-w-2 w-5 mr-4" />
      {children}
    </div>
  );
};

export default HeadingTag;
