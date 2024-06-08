import { useTranslation } from "react-i18next";
import { logodark } from "../../assets";
import { NavItems } from "../../utils/ifuture.types";

const Footer = () => {
  // console.log(footer)

  const { t } = useTranslation("footer");
  const navItems: NavItems = t("navItems", { returnObjects: true });
  const copyrights = t("copyrights");

  return (
    <footer className={" sm:px-16 px-6 mx-auto  pt-5  bg-primary text-white"}>
      <div >
        <div className={"flex flex-col   gap-5 lg:gap-10"}>
          <a href="#">
            <img
              src={logodark}
              alt="logo"
              loading="lazy"
              className="w-[150px] "
            />
          </a>

          <div className="flex justify-between gap-4 flex-wrap">
            <div className={"flex gap-3 flex-wrap justify-center "}>
              {navItems.map((item, i) => {
                return (
                  <a
                    className="rounded-full md:text-[16px] text-[14px]  text-nowrap transform ease-in-out duration-300 transition hover:scale-110 "
                    key={i}
                    href={item.path}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* <div className="flex flex-col gap-4 my-3">
              <h6 className="md:text-[16px] text-[14px]">{t("SubscribeToOurNewsLetter")}</h6>
              <div className="">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md w-2/3 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400"
                />
                <button className="md:mx-2 mx-1 md:text-[16px] text-[14px] border-teritary border px-3 py-2 rounded-md hover:ring  transform ease-in-out duration-300 transition hover:scale-110">
                  {t("Subscribe")}
                </button>
              </div>
              <p className="md:text-[16px] text-[14px]">{t("BySubscribingYouAgreeToWithOurPrivacyPolicy")}</p>
            </div> */}
          </div>
        </div>

        <div
          className={
            "flex items-center justify-between border-t border-white  md:mt-10 py-2 flex-wrap  "
          }
        >
          <div className=" flex md:gap-4 justify-center gap-2 items-center flex-wrap ">
            <a className="underline text-[14px] font-light " href="/">
              {t("PrivacyPolicy")}
            </a>
            <a className="underline text-[14px] font-light " href="/">
              {t("TermsOfService")}
            </a>
            <a className="underline text-[14px] font-light " href="/">
              {t("CookiesSettings")}
            </a>
          </div>
          <div className="flex-grow">
            <p className="my-1 md:text-end text-center  text-[14px] font-light">
              {copyrights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
