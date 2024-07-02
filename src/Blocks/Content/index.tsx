/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { contentImage } from "../../assets";
import { Page } from "../../utils/payload-types";
import { styles } from "../../utils/style";
import { CMSLink } from "../_blocks/CMSLink";
import RichText from "../_blocks/RichText";
// @ts-ignore
type Props = Extract<Page["layout"][0], { blockType: "content" }>;

const ContentBlock: React.FC<
  Props & {
    id?: string;
  }
> = (props) => {
  const { columns  ,backgroundColor} = props;

  return (
    <>
      <div className={styles.padding+` ${(backgroundColor=='161616'||backgroundColor=='000937')&&'text-white'}`} style={{backgroundColor:`#${backgroundColor}`}}>
        <div className=" grid grid-cols-6 md:gap-x-24 gap-y-8 ">
          {columns &&
            columns.length > 0 &&
            columns.map((col, index) => {
              const { enableLink, richText, link, size } = col;

              return (
                <>
                  <div
                    key={index}
                    className={`  ${
                      size == "half"
                        ? "col-span-6  md:col-span-3"
                        : size == "oneThird"
                        ? " col-span-6  md:col-span-2"
                        : size == "twoThirds"
                        ? "col-span-6  md:col-span-4"
                        : size == "full-wrapped"
                        ? "     col-span-6  md:w-3/4 mx-auto  "
                        : " col-span-6  "
                    }`}
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
    </>
  );
};

export default ContentBlock;
