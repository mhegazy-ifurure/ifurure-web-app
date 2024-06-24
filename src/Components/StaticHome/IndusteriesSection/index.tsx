/* eslint-disable react-refresh/only-export-components */
import { useTranslation } from "react-i18next";
import SectionWrapper from "../../../hoc/SectionWrapper";
import { NavItems } from "../../../utils/ifuture.types";
import { styles } from "../../../utils/style";
import i18next from "i18next";

const IndustriesSection = () => {
  const { t } = useTranslation("industries");
  const title = t("title");
  const label = t("label");
  const subTitle = t("subTitle");
  const listItems: NavItems = t("listItems", { returnObjects: true });

  return (
    <>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-10 py-10 "}>
        <div className="relative flex flex-col md:w-2/3   gap-5">
          <span
            className={
              styles.sectionSubText +
              ` absolute -top-10   ${
                i18next.dir() == "rtl" ? "right-0" : "left-0 "
              } `
            }
          >
            {label}
          </span>

          <h2 className={styles.sectionHeadText}>{title}</h2>
          <div
            className={
              "flex flex-col gap-5 " +
              styles.afterElement +
              `   ${
                i18next.dir() == "rtl"
                  ? "after:right-0 pr-4"
                  : "after:left-0  pl-4"
              } `
            }
          >
            <p>{subTitle}</p>
          </div>
        </div>
        <div className="">
          <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-y-10 gap-5 list-disc     ">
            {listItems.map((item, i) => (
              <li
                key={i}
                className=" font-bold list-inside md:text-[18px] text-[16px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(IndustriesSection, "industries");
