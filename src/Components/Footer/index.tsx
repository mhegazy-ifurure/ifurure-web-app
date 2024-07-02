
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-unused-vars


import { useTranslation } from "react-i18next";
import { logodark } from "../../assets";
import { CMSLink } from "../../Blocks/_blocks/CMSLink";
import { Footer as FooterType} from "../../utils/payload-types";
import { styles } from "../../utils/style";

const Footer = () => {
  // console.log(footer)

  const { t } = useTranslation("footer");
  const { copyright, navItems }: FooterType = t("data", { returnObjects: true });

  return (
    <footer className={styles.padding+ " mx-auto  bg-primary text-white"}>
      <div>
        <div className={"flex flex-col   gap-5 lg:gap-10"}>
          <a href="#">
            <img
              src={logodark}
              alt="logo"
              loading="lazy"
              className="w-[150px] "
            />
          </a>

          <div className="flex justify-between gap-4 flex-wrap my-4">
            <div className={"flex gap-3 flex-wrap justify-center items-center "}>
            <ul className="list-none flex flex-row gap-4 md:gap-10 items-center  flex-wrap ">
              {navItems &&
                navItems.map(({ link }, i) => {
                  return (
                    <li
                      key={i}
                      className={`  text-[14px] font-medium cursor-pointer capitalize `}
                    >
                      {/* @ts-ignore */}
                      <CMSLink className="text-nowrap" {...link} />
                    </li>
                  );
                })}

             
            </ul>
            </div>
          </div>
        </div>

        <div
          className={
            "flex items-center pt-4 gap-2 justify-between border-t border-white  md:mt-10 py-2 flex-wrap  "
          }
        >
          <div className=" flex md:gap-4 mx-auto gap-3 items-center flex-wrap ">
            <a className="underline text-[12px] font-light " href="/">
              {t("PrivacyPolicy")}
            </a>
            <a className="underline text-[12px] font-light " href="/">
              {t("TermsOfService")}
            </a>
            <a className="underline text-[12px] font-light " href="/">
              {t("CookiesSettings")}
            </a>
          </div>
          <div className="flex-grow">
            <p className="my-1  md:text-end  text-center text-[12px] font-light">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
