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
  const { media, content, apperance ,backgroundColor} = props;

  let caption;
  if (media && typeof media === "object") caption = media.caption;

  return (
    <div
     
      className={
        styles.contentMargin +
        ` grid grid-cols-1 ${
          apperance == "horizontal" && "md:grid-cols-2"
        } lg:my-10 my-5 gap-6 md:gap-14 ` +
        styles.padding + ` ${(backgroundColor=='161616'||backgroundColor=='000937')&&'text-white'}`
      } style={{backgroundColor:`#${backgroundColor}`}}
    >
      <div className={" order-last md:order-first"}>
        <div className="grid grid-cols-3 md:gap-x-24 gap-y-8 ">
          {content &&
            content.length > 0 &&
            content.map((item, index) => {
              const { enableLink, richText, link, size } = item;

              return (
                <>
                  <div
                    key={index}
                    className={
                      size == "oneThird"
                        ? " col-span-3  md:col-span-1"
                        : size == "twoThirds"
                        ? "col-span-3   md:col-span-2"
                        : " col-span-3  "
                    }
                  >
                    <RichText content={richText} />
                    <div className="mt-4">
                      {enableLink && link && <CMSLink {...link} />}
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>

      <div className="">
        <div className=" flex items-center justify-center">
          <Media className="w-full" resource={media} />
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
