import { HiPhone } from "react-icons/hi";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import Button from "@/components/Button";
import ContentWrapper from "@/components/ContentWrapper";

const Footer = () => {
  return (
    <section className="w-full relative z-10">
      <div className="absolute w-full h-full bg-main opacity-70 z-0" />
      <div className="flex flex-col w-full relative px-8">
        <ContentWrapper>
          <div className="flex flex-col gap-8 lg:flex-row w-full px-8 lg:px-0 py-8 lg:py-16">
            <div className="flex flex-col lg:w-1/4 text-sm text-gray-600">
              <h4 className="font-semibold">About Us</h4>

              <p className="mt-4">
                Our flowers are sourced from local growers and handpicked for
                their freshness and vibrancy. Explore our curated collection
                that showcases a diverse range of blooms, from classic roses to
                exotic orchids. Each petal reflects our commitment to quality
                and the celebration of nature's diverse beauty.
              </p>
            </div>

            <div className="flex flex-col text-sm text-gray-600 lg:ml-16">
              <h4 className="font-semibold">Customer Care</h4>

              <a className="mt-4" href="/contact">
                Contact Us
              </a>
              <a className="mt-2" href="/about">
                Information
              </a>
              <a className="mt-2" href="/faq">
                Frequently Asked Questions
              </a>
            </div>

            <div className="flex flex-col items-start text-sm text-gray-600 max-w-xs lg:ml-auto">
              <p className="mt-2">Sitemap</p>
              <p className="mt-2">Terms of Use</p>
              <p className="mt-2">Privacy Policy</p>

              <div className="flex text-lg mt-8">
                <FaFacebook style={{ marginRight: 12 }} />
                <FaInstagram style={{ marginRight: 12 }} />
                <FaWhatsapp />
              </div>

              <p className="mt-8 w-full text-xs">
                Discover Affordable Elegance with Blossom Haven. Our curated
                selection of local bouquets, seasonal arrangements, and exotic
                blooms offers unmatched beauty at accessible prices. Partnering
                with the finest artisans, we ensure each creation embodies the
                essence of nature's artistry. Request a quote today to explore
                our offerings and receive personalized recommendations for your
                floral project.
              </p>

              <Button
                className="px-4 mt-8"
                size="md"
                theme="primary-green-filled"
                to="/contact"
                target="_self"
              >
                Email Us
              </Button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
};

export default Footer;
