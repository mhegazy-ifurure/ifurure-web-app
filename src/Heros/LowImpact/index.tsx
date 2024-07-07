import React from 'react'
import { Page as PageType } from "../../utils/payload-types";
import RichText from '../../Blocks/_blocks/RichText';
import { CMSLink } from '../../Blocks/_blocks/CMSLink';
import { styles } from '../../utils/style';

const LowImpactHero: React.FC<PageType["hero"]> = ({
  richText,
  links,backgroundColor
  
}) => {
  return <>


  <section className={styles.padding +` ${(backgroundColor=='161616'||backgroundColor=='000937')&&'text-white'}`
        } style={{backgroundColor:`#${backgroundColor}`}}>
  <div
        className={
          "flex flex-col relative  md:pe-20 gap-5 pt-20 " }
      >
       
        <RichText content={richText} />

        <div className="flex gap-4 mt-10 items-center">
          {links?.map((link, i) => (
            <CMSLink {...link} key={i} className={styles.teritaryBtn} />
          ))}
        </div>
      </div>
  </section>
 
  
  
  </>
}

export default LowImpactHero