/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Page } from "../../utils/payload-types";
import { Media } from "../_blocks/Media";
import { styles } from "../../utils/style";
import RichText from "../_blocks/RichText";
// @ts-ignore
type Props = Extract<Page["layout"][0], { blockType: "mediaBlock" }> & {
  id?: string;
};
const MediaBlock: React.FC<Props> = (props) => {
  const { media, position = "default",backgroundColor } = props;
  let caption;
  if (media && typeof media === "object") caption = media.caption;

  return (
    <>
      <div className={styles.padding+` relative ${(backgroundColor=='161616'||backgroundColor=='000937')&&'text-white'}`} style={{backgroundColor:`#${backgroundColor}`}} >
        {position === "fullscreen" && (
          <div >
            <Media resource={media} />
          </div>
        )}
        {position === "default" && (
          <div className={styles.padding}>
            <Media resource={media} />
          </div>
        )}
        {caption && (
          <div className={styles.padding}>
            <RichText content={caption} />
          </div>
        )}
      </div>
    </>
  );
};

export default MediaBlock;
