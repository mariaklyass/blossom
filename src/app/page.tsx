import ContentWrapper from "@/components/ContentWrapper";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import Hero from "@/components/HomePage/Hero";
import Intro from "@/components/HomePage/Intro";
import KeyFeatures from "@/components/HomePage/KeyFeatures";
import FlowersOptions from "@/components/HomePage/FlowersOptions";
import OrderForm from "@/components/OrderForm";

function Home() {
  return (
    <main>
      {/* <MainNavigation /> */}
      <Hero />
      <Intro />
      <KeyFeatures />
      <FlowersOptions />
      <OrderForm />
      {/* <Footer /> */}
    </main>
  );
}
export default Home;
