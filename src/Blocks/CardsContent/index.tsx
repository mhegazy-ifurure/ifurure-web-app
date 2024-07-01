/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { contentImage } from "../../assets";
import { Page } from "../../utils/payload-types";
import { styles } from "../../utils/style";
import { CMSLink } from "../_blocks/CMSLink";
import { Media } from "../_blocks/Media";
import RichText from "../_blocks/RichText";
// @ts-ignore
type Props = Extract<Page["layout"][0], { blockType: "cardsContent" }>;

const CardsContentBlock: React.FC<
  Props & {
    id?: string;
  }
> = (props) => {
  const { columns } = props;

  return (
    <>
      <div className={styles.padding}>
        <div className=" grid grid-cols-12 md:gap-x-24 gap-y-8 ">
          {columns &&
            columns.length > 0 &&
            columns.map((col, index) => {
              const { enableLink, richText, media, link, size } = col;

              return (
                <>
                  <div
                    key={index}
                    className={`  ${
                      size == "oneThird"
                        ? " col-span-12  "
                        : size == "twoThirds"
                        ? "col-span-12   md:col-span-6"
                        : " col-span-12  "
                    }`}
                  >
                    <div className="w-full rounded overflow-hidden my-10 border">
                      <Media resource={media} />

                      <div className="flex justify-between flex-wrap py-3">
                        <div className="md:px-6 md:py-4 px-2 py-1">
                          <RichText content={richText} />
                          <div className="mt-4">
                            {enableLink && link && <CMSLink {...link} />}
                          </div>
                        </div>
                      </div>
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

export default CardsContentBlock;
