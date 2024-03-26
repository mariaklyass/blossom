import type { Metadata } from "next";
import { ApolloWrapper } from "@/components/ApolloWrapper";

import "@/styles/global.css";
import { quicksand, pacifico } from "@/utils/fonts";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blossom Heaven",
  description:
    "Free flower delivery in Florida on our wide assortment of luxury flower bouquets. Same day delivery by our team!",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${pacifico.variable}`}>
        <ApolloWrapper>
          <MainNavigation />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}

export default RootLayout;
