import Button from "@/components/Button";
import ContentWrapper from "@/components/ContentWrapper";
import HeadingTwo from "@/components/HeadingTwo";
import Link from "@/components/Link";

const Hero = () => {
  return (
    <section className="bg-main bg-no-repeat min-h-screen relative">
      <ContentWrapper className="flex-col gap-8 xl:gap-12">
        <div className="bg-green-100/20 backdrop-blur-lg drop-shadow-xl rounded-2xl max-w-5xl px-8 z-10">
          <div>
            {" "}
            <h1 className="xl:mt-24">
              Blossom Haven - Where Nature Meets Artistry
            </h1>
            <HeadingTwo className="max-xl:hidden">
              Explore Exquisite Floral Creations Crafted with Passion
            </HeadingTwo>
            <p className="mt-4 pb-8 text-md xl:text-2xl">
              Welcome to Blossom Haven, your haven for handcrafted floral
              arrangements that blend the beauty of nature with artisanal
              creativity. Each bloom is carefully selected and arranged to tell
              a unique story. Discover the perfect bouquet to brighten your
              special moments or express your heartfelt emotions.
            </p>
          </div>
        </div>
        <div className="flex gap-8 ml-8 mb-8 relative z-10">
          <Button
            className="shadow-2xl min-w-20 backdrop-blur-lg"
            theme="primary-green-filled"
            size="md"
            type="button"
          >
            <Link href="#order-form">Order</Link>
          </Button>
          <Button
            className="min-w-20 shadow-2xl backdrop-blur-lg"
            theme="primary-green-outline"
            size="md"
            type="button"
          >
            <Link href="/faq">FAQ</Link>
          </Button>
        </div>

        <div className="absolute bottom-0 w-full h-1/2 bg-hero bg-cover bg-center z-0 xl:hidden" />
        <div className="absolute bottom-0 w-full h-1/2  bg-gradient-to-b from-green-300  to-transparent xl:hidden" />
        <div className="absolute right-0 max-2xl:mx-8 w-1/2 h-full bg-hero bg-cover bg-center z-0 max-xl:hidden" />
        <div className="absolute right-0 bottom-0 max-2xl:mx-8 w-1/2 h-1/2 bg-gradient-to-t from-primary-green to-transparent max-xl:hidden" />
      </ContentWrapper>
    </section>
  );
};

export default Hero;
