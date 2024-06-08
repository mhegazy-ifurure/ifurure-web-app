/* eslint-disable react-refresh/only-export-components */
import { ContentSection, ContentSectionProps, } from "../../utils/ifuture.types";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../../hoc/SectionWrapper";
import { styles } from "../../utils/style";
import i18next from "i18next";
import { aboutImg } from "../../assets";


const StaticMediaContentBlock: React.FC<ContentSectionProps> = ({ content }) => {
  const { title, label, subtext, subContent, links } = content;


  return<>
  
  <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:my-10 my-5 "
        }
      >
        <div className={"flex flex-col relative py-5 md:pe-20 gap-5 order-last md:order-first "}>
          <span
            className={
              styles.sectionSubText +
              ` absolute -top-10   ${
                i18next.dir() == "rtl" ? "right-0" : "left-0 "
              } `
            }
          >
            {" "}
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
            {subtext?.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>

          {subContent?.map((item, i) => (
            <div key={i} className="flex flex-col gap-6 pl-6">
              <h4 className="font-bold text-[18px] md:text-[24px] capitalize">
                {item.title}
              </h4>
              <p>{item.text}</p>

              
            </div>
            
          ))}
          <div className="flex gap-4 mt-10 items-center">
            {links?.map((item, i) => (
              <a key={i} href={item.path} className={styles.mainBtn}>
                {item.label}
              </a>
            ))}
          </div>
          
        </div>
        <div className="flex items-center   ">
          <img src={aboutImg} alt="imge" loading="lazy" className="w-full" />
        </div>
      </div>
  </>
}

const AboutSection = () => {
  const { t } = useTranslation("home");
  const content: ContentSection = t("about", { returnObjects: true });

  return (
    <>
      <StaticMediaContentBlock content={content} />
    </>
  );
};

export default SectionWrapper(AboutSection ,'about');
