import ContentWrapper from "@/components/ContentWrapper";
import HeadingTag from "@/components/HeadingTag";
import HeadingTwo from "@/components/HeadingTwo";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "@/components/Link";
// import { FaPlayCircle } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="min-h-screen bg-green-100 relative">
      <div className="absolute w-full h-full bg-intro opacity-30 bg-cover bg-center lg:hidden" />
      <ContentWrapper className="flex-col w-full p-8">
        <div className="mt-8 aspect-video w-2/3 flex items-center justify-center max-lg:hidden">
          {/* <FaPlayCircle className="text-7xl text-light-green" /> */}
          <video autoPlay playsInline muted loop src="/intro.mp4"></video>
        </div>

        <div className="lg:w-2/3 bg-light-green/40 backdrop-blur-xl shadow-2xl rounded-3xl mt-8 lg:-mt-20 lg:ml-auto lg:mb-16 mb-8 lg:p-16 p-8">
          <HeadingTag>Our Story</HeadingTag>
          <HeadingTwo>Rooted in Passion, Blooming with Creativity</HeadingTwo>
          <p className="lg:text-2xl text-lg">
            At Blossom Haven, we believe in the language of flowers and the art
            of thoughtful gifting. Our journey began with a passion for floral
            design and a commitment to bringing joy through nature's beauty.
            Each member of our team is dedicated to creating stunning
            arrangements that reflect the essence of every occasion.
          </p>

          <Button
            className="mt-4 lg:mt-8 p-4"
            theme="primary-green-filled"
            size="md"
            type="button"
          >
            <Link href="#order-form">Order your dream bouquet</Link>
          </Button>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Intro;
