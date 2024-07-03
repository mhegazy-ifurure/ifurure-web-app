/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { styles } from "../../utils/style";
import { Page } from "../../utils/payload-types";
import RichText from "../_blocks/RichText";
import ContactUsForm from "./ContactForm";
import ContactCard from "./ContactCards";
import TechnicalSupport from "./technicalSupportSection";
import RequestServiceForm from "./RequestServiceForm";
// @ts-ignore

type Props = Extract<Page["layout"][0], { blockType: "formBlock" }>;

const FormBlock: React.FC<
  Props & {
    id?: string;
  }
> = (props) => {
  const {
    backgroundColor,
    enableIntroContent,
    introContent,
    contactCards,
    enableTechnicalSupport,
    technicalSupportMedia,
    enableLink,
    technicalSupport,
    link,formType
  } = props;

  return (
    <>
      <div className={styles.padding} style={{backgroundColor:`#${backgroundColor}`}}>
        {enableIntroContent && <RichText content={introContent} />}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2">
            {
              formType=='contactForm'?<ContactUsForm/>:<RequestServiceForm/>
            }
          </div>
          <div className="grid grid-cols-1  gap-4 md:p-10 ">
            {enableTechnicalSupport && (
              <>
                <TechnicalSupport
                  media={technicalSupportMedia}
                  enableLink={enableLink}
                  richText={technicalSupport}
                  link={link}
                />
              </>
            )}

            {contactCards.length > 0 &&
              contactCards.map((item, i) => (
                <ContactCard item={item} key={i} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormBlock;
