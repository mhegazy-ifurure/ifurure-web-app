import React from 'react'
import { Page as PageType } from "../../utils/payload-types";
import RichText from '../../Blocks/_blocks/RichText';
import { CMSLink } from '../../Blocks/_blocks/CMSLink';
import { styles } from '../../utils/style';

const LowImpactHero: React.FC<PageType["hero"]> = ({
  richText,
  links,
  
}) => {
  return <>
  <div
        className={
          "flex flex-col relative py-5 md:pe-20 gap-5 mt-10 "+styles.padding
        }
      >
       
        <RichText content={richText} />

        <div className="flex gap-4 mt-10 items-center">
          {links?.map((link, i) => (
            <CMSLink {...link} key={i} className={styles.teritaryBtn} />
          ))}
        </div>
      </div>
  
  
  </>
}

export default LowImpactHero