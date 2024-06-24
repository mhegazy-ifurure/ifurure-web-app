/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { useTranslation } from "react-i18next";
import ServiceCard from "../ServiceCard";
import SectionWrapper from "../../../hoc/SectionWrapper";
import {  ServiceItem, WhyUsSection } from "../../../utils/ifuture.types";
import { service1, service2 } from "../../../assets";
import { styles } from "../../../utils/style";
import i18next from "i18next";

const WhyUs: React.FC<{ whyUs: WhyUsSection }> = ({ whyUs }) => {
  const { title, label, links, whyUsData } = whyUs;

  return (
    <>
     <span   className="block w-[5px] h-[68px]  " id="why-us">
            {" "}
            &nbsp;
          </span>
      <div   className={"grid grid-cols-1 md:grid-cols-2 gap-10 my-5  " }>
     
        <div className="flex flex-col  gap-5 relative">
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
          <h3 className={styles.sectionHeadText}>{title}</h3>
          <div className="hidden md:flex gap-4 mt-10 items-center">
            {links?.map((item, i) => (
              <a
                key={i}
                href="#"
                className={styles.teritaryBtn}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-10 ">
          {whyUsData.map((item, i) => (
            <div
              key={i}
              className={
                styles.afterElement +
                `   ${
                  i18next.dir() == "rtl"
                    ? "after:right-0 pr-4"
                    : "after:left-0  pl-4"
                } `
              }
            >
              <h4 className="font-bold mb-3 text-[18px] md:text-[24px]">
                {item.title}
              </h4>
              <p>{item.text}</p>
            </div>
          ))}
          <div className="md:hidden flex gap-4 mt-10 items-center">
            {links?.map((item, i) => (
              <a
                key={i}
                href="#"
                className={styles.teritaryBtn}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
const Services = () => {
  const serviceImgs = [service1, service2];
  const { t } = useTranslation("services");
  const label = t("label");
  const SectionTitle = t("SectionTitle");
  const whyUs: WhyUsSection = t("WhyUsSection", { returnObjects: true });
  const serviceItems: ServiceItem[] = t("serviceItems", {
    returnObjects: true,
  });

  return (
    <>
      <div className={"relative flex mt-10  flex-col gap-5 border-b-2 "}>
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
        <h3 className={styles.sectionHeadText + "   whitespace-break-spaces break-words"}>{SectionTitle}</h3>
      </div>

      <div className="flex ">
        {/* <Sidebar serviceItems={serviceItems} activeItem={activeItem} /> */}
        <div>
          {serviceItems.map((item, i) => (
            <ServiceCard
              service={item}
              key={i}
              id={"service" + i}
              img={serviceImgs[i]}
            />
          ))}
        </div>
      </div>

      <WhyUs whyUs={whyUs} />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Services, "services");
