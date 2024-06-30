/* eslint-disable @typescript-eslint/ban-ts-comment */
import { styles } from "../../utils/style";
import { Page } from "../../utils/payload-types";
import RichText from "../_blocks/RichText";
import { CMSLink } from "../_blocks/CMSLink";
import { Media } from "../_blocks/Media";
// @ts-ignore
type Props = Extract<Page["layout"][0], { blockType: "mediaContent" }>;

const MediaContent: React.FC<
  Props & {
    id?: string;
  }
> = (props) => {
  const { media, content , apperance} = props;
  
  let caption;
  if (media && typeof media === "object") caption = media.caption;

  return (
    <div
      className={
        styles.contentMargin + ` grid grid-cols-1 ${apperance=='horizontal'&&'md:grid-cols-2'} lg:my-10 my-5 gap-6 `+styles.padding
      }
    >
      <div className={" order-last"}>
        <div className="grid grid-cols-12 ">
          {content &&
            content.length > 0 &&
            content.map((item, index) => {
              const { enableLink, richText, link, size } = item;

              return (
                <>
                  <div
                    key={index}
                    className={
                      size == "half"
                        ? "col-span-6"
                        : size == "oneThird"
                        ? "col-span-4"
                        : size == "twoThirds"
                        ? "col-span-8"
                        : "col-span-12"
                    }
                  >
                    <RichText content={richText} />
                   <div className="mt-4">
                   {enableLink && link && (
                      
                      <CMSLink
                      
                        {...link}
                      />
                    )}
                   </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>

      <div className="">
        <div className=" flex items-center justify-center">
          <Media resource={media} />
        </div>

        {caption && (
          <div className={styles.padding}>
            <RichText content={caption} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaContent;
