import Logo from "/public/svgs/logo.svg";

import Link from "@/components/Link";
import MENUS from "@/constants/menus";

type MobileNavigationProps = {
  callbacks: {
    close: VoidFunction;
  };
};

const MobileNavigation = (props: MobileNavigationProps) => {
  const {
    callbacks: { close },
  } = props;

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-7 px-6 bg-green-100 border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <Link className="mr-auto text-3xl font-bold leading-none" href="/">
            <Logo fill="black" />
          </Link>

          <button className="navbar-close" onClick={close}>
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-4 ml-4 uppercase">
          {MENUS.header.map(({ to, text }, i) => (
            <li key={i} className="inline-block">
              <Link className="font-semibold" href={to} title={text}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigation;
