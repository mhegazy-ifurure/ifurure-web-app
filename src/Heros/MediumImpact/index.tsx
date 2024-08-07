import React from "react";
import { Page as PageType } from "../../utils/payload-types";
import { styles } from "../../utils/style";
import { CMSLink } from "../../Blocks/_blocks/CMSLink";
import RichText from "../../Blocks/_blocks/RichText";
import { Media } from "../../Blocks/_blocks/Media";

const MediumImpactHero: React.FC<PageType["hero"]> = ({
  richText,
  media,
  links,backgroundColor
}) => {
  return (
   <section className={ styles.padding +` ${(backgroundColor=='161616'||backgroundColor=='000937')&&'text-white'}`} style={{backgroundColor:`#${backgroundColor}`}}>

<div
      className={
        "grid grid-cols-1 md:grid-cols-2 lg:my-10 mt-10 " 
      }
    >
      <div className={"flex flex-col relative py-5 md:pe-20 gap-5  "}>
        <RichText content={richText} />

        <div className="flex gap-4 mt-10 items-center">
          {links?.map((link, i) => (
            <CMSLink {...link} key={i} className={styles.teritaryBtn} />
          ))}
        </div>
      </div>
      <div className="flex items-center   ">
        {media && typeof media == "object" && <Media resource={media} />}
      </div>
    </div>

   </section>
  );
};

export default MediumImpactHero;
