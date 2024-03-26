import ContentWrapper from "@/components/ContentWrapper";
import HeadingTag from "@/components/HeadingTag";
import HeadingTwo from "@/components/HeadingTwo";
import FlowerOption from "./FlowerOption";
import Local from "/public/images/local.jpg";
import Seasonal from "/public/images/seasonal.jpg";
import Exotic from "/public/images/exotic.jpg";

const FlowersOptions = () => {
  return (
    <section className="w-full bg-harsh p-16">
      <ContentWrapper>
        <div className="flex flex-col items-center w-full relative">
          <div className="absolute bg-main w-[350px] lg:w-[700px] h-[500px] rounded-full blur-[100px] -top-10 lg:-top-20 -left-20 lg:-left-10 " />
          <div className="bg-light-green/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 max-w-3xl">
            {" "}
            <HeadingTag>What Makes Us Unique?</HeadingTag>
            <HeadingTwo>
              Every floral creation at Blossom Haven is a masterpiece, wheather
              it's local plants, seasonal flowers or some exotic flora.{" "}
            </HeadingTwo>
          </div>

          <hr className="mt-16 text-light-green" />

          <div className="grid lg:grid-cols-3 gap-8 w-full mt-8 lg:mt-16">
            <FlowerOption image={Local.src} title="Local Chronicles">
              Explore the charm of our 'Local Bloom Chronicles,' a collection
              that narrates the vibrant tales of our community. Sourced directly
              from local growers, these bouquets encapsulate the essence of our
              region, bringing a touch of homegrown elegance to your special
              moments.
            </FlowerOption>
            <FlowerOption image={Seasonal.src} title="Seasonal Spectacles">
              Indulge in the ever-changing beauty of our 'Seasonal Spectacles'
              collection. Each season brings a new chapter of colors and
              fragrances, and our florists curate enchanting arrangements that
              capture the essence of the moment. Embrace the joy of seasonal
              splendor with our exquisite blooms.
            </FlowerOption>
            <FlowerOption image={Exotic.src} title="Exotic Blooms">
              For the adventurous soul, our 'Exotic Blooms Beyond Borders'
              collection features exotic flowers that transport you to far-off
              lands. Immerse yourself in the beauty of rare and unique blooms,
              carefully selected to add an element of surprise and
              sophistication to your floral experience.
            </FlowerOption>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default FlowersOptions;
