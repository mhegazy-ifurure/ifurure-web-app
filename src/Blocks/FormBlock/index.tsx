/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { styles } from "../../utils/style";
import { Page } from "../../utils/payload-types";
import RichText from "../_blocks/RichText";
import ContactUsForm from "./ContactForm";
import { useTranslation } from "react-i18next";
import { ContactForm } from "../../utils/ifuture.types";
import { Media } from "../_blocks/Media";
// @ts-ignore

type Props = Extract<Page["layout"][0], { blockType: "formBlock" }>;

const FormBlock: React.FC<
  Props & {
    id?: string;
  }
> = (props) => {
  const { enableIntroContent, introContent, contactCards } = props;
  console.log({ contactCards });

  return (
    <>
      <div className={styles.padding}>
        {enableIntroContent && <RichText content={introContent} />}

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <ContactUsForm />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-10 ">
            {contactCards.length > 0 &&
              contactCards.map((item, i) => (
                <>
                  <div
                    key={i}
                    className="flex flex-col gap-2 py-3 px-5 bg-yellow-600  rounded-lg   justify-center  cursor-pointer "
                  >
                    <Media resource={item.icon} className="w-[90px]" />

                    <h6 className="text-[20px] capitalize font-bold">{item.type}</h6>
                    <a
                      href={
                        item.info === "+966596544376"
                          ? `tel:${item?.info}`
                          : `mailto:${item?.info}`
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
