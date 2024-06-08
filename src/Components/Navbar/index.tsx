/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-unused-vars

import { useEffect, useState } from "react";
import { logo3, logodark } from "../../assets/index.js";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle/index.js";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import i18next from "i18next";
import { CMSLink } from "../../Blocks/_blocks/CMSLink/index.js";
import { Header } from "../../utils/payload-types.js";

export const Navbar = () => {
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setTextColor("text-primary");
      } else {
        setTextColor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  // const{isLoading} = useHeader()
  const { t } = useTranslation("header");
  const navItems: Header = t("data", { returnObjects: true });
  // console.log(i18next.getResource("ar", "header", "data"));

  // console.log({ navItems });

  return (
    <>
      <nav
        className={`sm:px-16 px-6  w-full flex items-center py-2 md:py-4 fixed right-0 left-0 top-0 z-20   ${
          textColor === "text-white" ? "" : "bg-white-100"
        }  `}
      >
        <div className="w-full flex justify-between items-center max-w-8xl mx-auto">
          <a
            className=""
            href="/"
            onClick={() => {
              setActive("./home");
              window.scroll({ top: 0 });
            }}
          >
            <img
              src={textColor === "text-white" ? logodark : logo3}
              className="w-[150px] "
              loading="lazy"
              alt="logo"
            />
          </a>

          <div className="flex gap-4 items-center">
            <ul className="list-none hidden lg:flex flexrow gap-10 items-center ">
              {navItems &&
                navItems.map(({ link }, i) => {
                  return (
                    <li
                      key={i}
                      className={`  text-[18px] font-medium cursor-pointer capitalize ${textColor} `}
                    >
                      <CMSLink className="text-nowrap" {...link} />
                    </li>
                  );
                })}

              {/* {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            className={textColor + " font-bold no-underline text-nowrap"}
          />
        );
      })} */}
              <li>
                <LanguageToggle textColor={textColor} />
              </li>
            </ul>
          </div>

          <div className="lg:hidden flex flex-1 justify-end items-center ">
            {!toggle ? (
              <Bars3Icon
                className={textColor + " w-[32px]"}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <XMarkIcon
                className={textColor + " w-[32px]"}
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
                  <LanguageToggle textColor={"text-primary"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
