/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { styles } from "../../utils/style";
import { Page } from "../../utils/payload-types";
import RichText from "../_blocks/RichText";
import ContactUsForm from "./ContactForm";
import { Media } from "../_blocks/Media";
// @ts-ignore

type Props = Extract<Page["layout"][0], { blockType: "formBlock" }>;

const FormBlock: React.FC<
  Props & {
    id?: string;
  }
> = (props) => {
  const { enableIntroContent, introContent, contactCards } = props;

  return (
    <>
      <div className={styles.padding}>
        {enableIntroContent && <RichText content={introContent} />}

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <ContactUsForm />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-10 order-first md:order-last ">
            {contactCards.length > 0 &&
              contactCards.map((item, i) => (
                <>
                  <div
                    key={i}
                    className="flex flex-col gap-2 py-3 px-5  rounded-lg   justify-center  cursor-pointer "
                  >
                    <Media resource={item.icon} className="w-[20px]" />

                    <h6 className=" text-[20px] capitalize leading-[140%] ">{item.title}</h6>
                    <p className="text-[16px] md:text-[18px]  ">{item.subtext}</p>
                    <a
                      href={
                        item.type === "phone"
                          ? `tel:${item?.contactInfo}`
                          :item.type === "mail"? `mailto:${item?.contactInfo}`:``
                      }
                      className="underline"
                    >
                      {item?.contactInfo}
                    </a>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormBlock;
