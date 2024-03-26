import ContentWrapper from "@/components/ContentWrapper";

function About() {
  return (
    <ContentWrapper className="flex min-h-screen flex-col items-center justify-between gap-8 p-24">
      <h2>About Blossom Haven</h2>

      <p>
        At Blossom Haven, we believe in the transformative power of flowers.
        Nestled in the heart of Florida, our boutique floral studio is more than
        just a shop; it's a sanctuary where nature's beauty meets artisanal
        craftsmanship.
      </p>

      <h2>Our Story</h2>

      <p>
        Blossom Haven was founded with a simple yet profound vision: to spread
        joy and evoke emotions through the language of flowers. What started as
        a passion project among friends has blossomed into a beloved local
        institution, renowned for its exquisite floral designs and personalized
        service.
      </p>

      <h2>Crafted with Passion</h2>

      <p>
        Every bouquet that leaves our studio is a testament to our dedication to
        excellence. From hand-selecting the freshest blooms to meticulously
        arranging them into stunning compositions, our team of skilled florists
        infuses each creation with passion and artistry.
      </p>

      <h2>Community-Centric Values</h2>

      <p>
        At Blossom Haven, we're not just about flowers; we're about building
        connections and nurturing relationships within our community. We proudly
        support local growers and artisans, ensuring that our blooms are not
        only beautiful but also sustainably sourced.
      </p>

      <h2>Your Floral Journey Begins Here</h2>

      <p>
        Whether you're celebrating a milestone, expressing gratitude, or simply
        brightening someone's day, let Blossom Haven be your partner in floral
        storytelling. From intimate gatherings to grand events, we're here to
        help you create unforgettable moments with our signature blooms.
      </p>

      <h3 className="text-center font-semibold font-serif">
        Thank you for choosing Blossom Haven. We look forward to being a part of
        your floral journey.
      </h3>
    </ContentWrapper>
  );
}

export default About;
