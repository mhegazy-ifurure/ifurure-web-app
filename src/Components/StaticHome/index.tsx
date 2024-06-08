/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import { ContentSection, Hero, HomeHeroProps } from "../../utils/ifuture.types";
import React from "react";
import { styles } from "../../utils/style";
import Contact from "../Contact";
import IndusteriesSection from "../IndusteriesSection";
import Projects from "../Projects";
import ServicesSection from "../ServicesSection";
import AboutSection from "../AboutUs";


const HomeHero: React.FC<HomeHeroProps> = ({ hero }) => {
  const { title, subTitle, links } = hero;

  return (
    <>
      <section
        className={`w-full min-h-screen  bg-hero-background  relative flex flex-col justify-end py-10     overflow-hidden  bg-cover bg-no-repeat bg-center `}
      >
        <div className="flex flex-col md:w-2/3 lg:w-1/3 gap-4 md:ms-10  px-2">
          <h1 className={styles.heroHeadText + "  font-bold text-white   "}>
            {title}
          </h1>
          <p className={styles.heroSubText + " text-white"}>{subTitle}</p>
          <div className="flex gap-4 my-5 flex-wrap ">
            {links.map((item, i) => {
              return (
                <>
                  <a
                    key={i}
                    href={item.path}
                    className={`${
                      i % 2 ? " border border-solid" : "bg-teritary  border-0"
                    }  px-5 py-3  text-white rounded-[10px] capitalize font-medium  text-center no-underline md:text-[16px] text-[14px] text-nowrap  cursor-pointer transform ease-in-out duration-300 transition hover:scale-110
                    `}
                  >
                    {item.label}
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};




const StaticHomeContent = ({content})=>{

  const { title, contentList1, contentList2, contentEnd } = content;
  return <>
  
  
  <div
        className={
          styles.contentMargin +
          " " +
          styles.paddingX +
          " flex flex-col  justify-center max-w-7xl  mx-auto gap-4 relative z-0"
        }
      >
        <h2 className={styles.sectionHeadText}>{title}</h2>
        <ul className=" list-disc px-3 ">
          {contentList1?.map((list, i) => (
            <>
              <li className="my-5" key={i}>
                {list}

                {i == 2 && (
                  <ol className="list-decimal marker:text-teritary marker:text-[20px] marker:font-bold list-inside ">
                    {contentList2?.map((list, i) => (
                      <>
                        <li
                          className="my-5"
                          dangerouslySetInnerHTML={{ __html: list }}
                          key={i}
                        ></li>
                        {/* {i == 1 && (
                          // <div className=" z-0  lg:my-30 md:my-24 my-10 lg:-mx-20  ">
                          //   <img
                          //     src={contentImage}
                          //     alt="image"
                          //     className="w-full  "
                          //   />
                          // </div>
                        )} */}
                      </>
                    ))}
                  </ol>
                )}
              </li>
            </>
          ))}
        </ul>
        <h3 className={" font-bold text-[20px] "}>{contentEnd}</h3>
      </div>
  
  </>
}

const StaticHome = () => {
  const { t } = useTranslation("home");
  const hero: Hero = t("hero", { returnObjects: true });
  const content1: ContentSection = t("content1", { returnObjects: true });

  return (
    <>
      <HomeHero hero={hero} />
      <StaticHomeContent content={content1} />
      <AboutSection />
      <IndusteriesSection />
      <ServicesSection />
      <Projects />
      {/* <Testmonials/> */}
      <Contact />
    </>
  );
};

export default StaticHome;
