import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import Logo from "/public/svgs/logo.svg";

const Flowers = () => {
  return (
    <section className="bg-light grainy min-h-dvh">
      <div>
        <svg width="0" height="0">
          <filter id="grainy" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency=".537" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend mode="multiply" in="SourceGraphic" />
          </filter>
        </svg>
        <h2 className="px-16 lg:px-48 pt-16 opacity-55">Soon to come...</h2>
        {/* <div className="w-full min-h-screen flex">
          <div className="relative flex-1">
            {" "}
            <Image src="/svgs/gradient.svg" alt="" width={1650} height={50} />
          </div>
          <div className="flex-1 mr-16"></div>

          <h3 className="dark-text text-3xl lg:text-5xl xl:text-8xl absolute top-1/2 left-40 drop-shadow-2xl backdrop-blur-3xl bg-white/20 rounded-lg p-16">
            Portfolio
            <br />
            Maria Klyass
          </h3>
   </div> */}
        {/* <h3 className="text text-8xl absolute bottom-[170px] right-52">
            by Maria
            <br /> Klyass
          </h3> */}
      </div>
    </section>
  );
};

export default Flowers;
