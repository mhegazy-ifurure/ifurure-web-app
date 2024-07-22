/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-unused-vars

import { useEffect, useState } from "react";
import { logo3 } from "../../assets/index.js";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle/index.js";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import i18next from "i18next";
import { CMSLink } from "../../Blocks/_blocks/CMSLink/index.js";
import { Header } from "../../utils/payload-types.js";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation("header");
  // @ts-ignore
  const navItems: Header["navItems"][0] = t("data", { returnObjects: true });
console.log({navItems});

  return (
    <>
      <nav
        className={`${visible ? 'translate-y-0' : '-translate-y-20'}  transition-transform duration-500  sm:px-16 px-6  w-full flex  items-center py-2 md:py-4 fixed right-0 left-0  z-20 bg-white-100 text-primary
         `}
      >
        <div className="w-full flex justify-between items-center max-w-8xl mx-auto">
          <a
            className=""
            href="/"
            onClick={() => {
            
              window.scroll({ top: 0 });
            }}
          >
            <img src={logo3} className="w-[150px] " loading="lazy" alt="logo" />
          </a>

          <div className="flex gap-4 items-center">
            <ul className="list-none hidden lg:flex flexrow gap-10 items-center ">
              {navItems &&
                navItems.map(({ link }, i) => {
                  return (
                    <li
                      key={i}
                      className={`  text-[16px] font-medium cursor-pointer capitalize`}
                    >
                      <CMSLink className="text-nowrap" {...link} />
                    </li>
                  );
                })}

              <li>
                <LanguageToggle />
              </li>
            </ul>
          </div>

          <div className="lg:hidden flex flex-1 justify-end items-center ">
            {!toggle ? (
              <Bars3Icon
                className={" w-[32px]"}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <XMarkIcon
                className={" w-[32px]"}
                onClick={() => setToggle(!toggle)}
              />
            )}

            {/*            
            <img
              loading="lazy"
              src={toggle ? xMark : menu}
              alt="menu"
              className="w-[24px] h-[24px] object-contain cursor-pointer "
              onClick={() => setToggle(!toggle)}
            /> */}

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-3 bg-white absolute top-10 ${
                i18next.dir() == "rtl" ? "left-0" : "right-0"
              } mx-4 my-2 min-w-[140px] z-10  justify-center rounded`}
            >
              <ul className="list-none flex justify-end items-center flex-col gap-3 ">
                {navItems.map(({ link }, i) => {
                  // console.log(link);

                  return (
                    <>
                      <li
                        key={i}
                        className={` capitalize font-medium  cursor-pointer text-[14px]`}
                      >
                        <CMSLink className="text-nowrap" {...link} />
                      </li>
                    </>
                  );
                })}
                <li>
                  <LanguageToggle />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
