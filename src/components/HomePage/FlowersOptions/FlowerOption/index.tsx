import Image from "next/image";

type FlowerOptionProps = {
  children: React.ReactNode;
  title: string;
  image: string;
};

const FlowerOption = (props: FlowerOptionProps) => {
  const { children, title, image } = props;

  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute bottom-0 w-full h-[677px] bg-light bg-cover bg-center blur-3xl lg:hidden" />

      <Image
        src={image}
        width={350}
        height={100}
        alt={title}
        className="drop-shadow-2xl rounded-2xl"
      />

      <h3 className="relative text-center text-lg lg:text-3xl uppercase font-semibold mt-8">
        {title}
      </h3>
      <p className="relative text-center mt-6"> {children}</p>
    </div>
  );
};

export default FlowerOption;
