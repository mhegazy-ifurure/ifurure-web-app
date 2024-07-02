/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

import { Page } from "../../utils/payload-types";
import RichText from "../_blocks/RichText";
import { CMSLink } from "../_blocks/CMSLink";
import { styles } from "../../utils/style";
// @ts-ignore
type Props = Extract<Page["layout"][0], { blockType: "cta" }>;

export const CallToActionBlock: React.FC<
  Props & {
    id?: string;
  }
> = ({ links, richText ,backgroundColor }) => {
    
  return (
  
      <div className={styles.padding+` ${(backgroundColor=='161616'||backgroundColor=='000937')&&'text-white'}`} style={{backgroundColor:`#${backgroundColor}`}}>
        <div className={'grid grid-cols-1 text-center'}>
          <div >
            <RichText className={richText} content={richText} />
          </div>
          <div >
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} {...link} />;
            })}
          </div>
        </div>
      </div>
  );
};
