import ContentWrapper from "@/components/ContentWrapper";
import KeyFeature from "./KeyFeature";
import Placeholder from "/public/svgs/favicon.svg";

const KeyFeatures = () => {
  return (
    <section className="w-full p-32 relative bg-green-100">
      <ContentWrapper>
        <div className="grid lg:grid-cols-3 justify-center gap-4 w-full border-t border-b py-16 z-10  backdrop-blur-lg">
          <KeyFeature icon={<Placeholder />} title="Artisanal Craftsmanship">
            Every floral creation at Blossom Haven is a masterpiece crafted with
            artisanal expertise. Our skilled florists pay meticulous attention
            to detail, ensuring that each arrangement is a unique expression of
            creativity and beauty. Discover the artistry behind our blooms.
          </KeyFeature>

          <KeyFeature icon={<Placeholder />} title="Fresh and Local Blooms">
            We believe in the beauty of locally sourced blooms. Our flowers come
            directly from trusted local growers, ensuring freshness and
            supporting our community. Explore our curated collection, where each
            petal tells a story of sustainability and vibrant elegance.
          </KeyFeature>

          <KeyFeature
            icon={<Placeholder />}
            title="Bouquets for Every Occasion"
          >
            Make every moment special with our bespoke bouquets. Choose your
            favorite flowers, colors, and style, and our florists will create a
            custom arrangement that perfectly suits the occasion. Whether it's a
            romantic gesture or a celebration, our bespoke bouquets speak
            volumes.
          </KeyFeature>
        </div>
        <div className="absolute bg-gradient-to-br from-green-100 to-green-400 h-[600px] w-[500px] xl:w-[1100px] rounded-[380px] top-[50px] left-1/2 -ml-[550px] blur-[100px]" />
      </ContentWrapper>
    </section>
  );
};

export default KeyFeatures;
