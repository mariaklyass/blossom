import { Quicksand } from "next/font/google";
import { Pacifico } from "next/font/google";

export const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});
