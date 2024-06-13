/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

import { Page as PageType } from "../../utils/payload-types";
import RichText from "../../Blocks/_blocks/RichText";
import { CMSLink } from "../../Blocks/_blocks/CMSLink";
import { styles } from "../../utils/style";

const HighImpactHero: React.FC<PageType["hero"]> = ({
  richText,
  media,
  links,
}) => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${
            media &&
            typeof media == "object" &&
            import.meta.env.REACT_APP_MEDIA + "/" + media.filename
          })`,
        }}
        className={` w-full min-h-screen relative flex bg-cover bg-center flex-col justify-end overflow-hidden `}
      >
        <div className=" md:w-1/2 md:px-16 px-6 mb-5 ">
          <RichText className={" text-white "} content={richText} />

          <div className="my-5 flex  flex-wrap gap-3">
            {links?.map(({ link }, i) => {
              return (
                // @ts-ignore
                <CMSLink
                  key={i}
                  {...link}
                  className={i % 2 == 0 ? styles.mainBtn : styles.primaryBtn}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HighImpactHero;
