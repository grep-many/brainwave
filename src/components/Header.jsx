import { brainwave } from "@/assets";
import { navigation } from "@/constants";
import { useLocation } from "react-router";
import Button from "./Button";
import MenuSvg from "@/assets/svg/MenuSvg";
import { HamburgerMenu } from "@/components/design/Header";
import React from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = React.useState(true);

  const handleClick = async (e, url) => {
    if (!document.querySelector(url)) return e.preventDefault();
    setOpenNavigation(false);
  };

  const toggleNav = () => {
    const body = document.getElementById("root");
    if (openNavigation) {
      body.removeAttribute("style");
      return setOpenNavigation(false);
    }
    body.style.overflow = "hidden";
    body.style.height = "100vh";
    return setOpenNavigation(true);
  };

  return (
    <header
      className={`bg-n-8/90 border-n-6 fixed top-0 z-50 w-screen border-b backdrop-blur-sm ${openNavigation && "bg-n-8"}`}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <a href="#hero" className="block w-48 xl:mr-8" onClick={(e) => handleClick(e, "#hero")}>
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>

        <nav
          className={`${
            openNavigation ? "max-lg:h-screen" : " max-lg:h-0"
          } transition-all flex overflow-hidden bg-n-8 absolute top-19 right-0 bottom-0 left-0 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
        >
          <div className="relative m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation?.length &&
              navigation.map(({ id, url, onlyMobile, title }) => (
                <a
                  key={id}
                  href={url}
                  onClick={(e) => handleClick(e, url)}
                  className={`font-code text-n-1 hover:text-color-1 relative block text-2xl uppercase transition-colors ${
                    onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    url === pathname.hash ? "lg:text-n-1 z-2" : "lg:text-n-1/50"
                  } lg:hover:text-n-1 lg:leading-5 xl:px-12`}
                >
                  {title}
                  <span
                    className={`absolute bottom-1/4 left-1/2 -translate-x-1/2 rounded-full transition-all md:bottom-1/3 ${url === pathname.hash ? "h-[1.5px] w-1/3" : "w-0"} bg-white`}
                  />
                </a>
              ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button text-n-1/50 hover:text-n-1 mr-8 hidden transition-colors lg:block"
        >
          New account
        </a>
        <Button href="#login" className="hidden! lg:flex!">
          sign in
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNav}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
