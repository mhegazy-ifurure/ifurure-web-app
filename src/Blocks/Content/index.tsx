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
  const { columns } = props;

  return (
    <>
      <div className={styles.padding}>
        <div className=" grid grid-cols-12 gap-x-24 gap-y-8 ">
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
                        ? " col-span-12  md:col-span-6"
                        : size == "oneThird"
                        ? " col-span-12  md:col-span-4"
                        : size == "twoThirds"
                        ? " col-span-12  md:col-span-8"
                        : size == "full-wrapped"
                        ? " col-span-12 md:w-3/4 mx-auto  "
                        : " col-span-12  "
                    }`}
                  >
                    <RichText content={richText} />
                    
                    {enableLink && link && <CMSLink className={styles.secondaryBtn} {...link} />}
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
