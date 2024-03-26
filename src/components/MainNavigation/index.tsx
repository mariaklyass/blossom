"use client";
import { useState } from "react";
import ContentWrapper from "@/components/ContentWrapper";
// import Link from "next/link";
import Link from "../Link";
import Logo from "/public/svgs/logo.svg";
import MENUS from "@/constants/menus";
import MobileNavigation from "./MobileNavigation";

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full px-8 h-36 flex items-center bg-gradient-to-b from-green-200 to-[rgb(222,228,218)]">
      <ContentWrapper>
        <Link href="/">
          <Logo />
        </Link>

        <div className="lg:hidden ml-auto">
          <button
            className="navbar-burger flex items-center white"
            onClick={() => setShowMenu(true)}
          >
            <svg
              className="block h-5 w-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        {showMenu && (
          <MobileNavigation
            callbacks={{
              close: () => setShowMenu(false),
            }}
          />
        )}

        <ul className="max-lg:hidden flex gap-4 ml-auto uppercase">
          {MENUS.header.map(({ to, text }, i) => (
            <li key={i} className="inline-block">
              <Link className="font-semibold" href={to} title={text}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </ContentWrapper>
    </nav>
  );
};

export default MainNavigation;
