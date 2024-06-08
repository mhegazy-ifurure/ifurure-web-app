/* eslint-disable no-constant-condition */
/* eslint-disable react-refresh/only-export-components */
import { useTranslation } from "react-i18next";
import SectionWrapper from "../../hoc/SectionWrapper";
import {
  ContactCard,
  ContactForm,
  
} from "../../utils/ifuture.types";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { styles } from "../../utils/style";
import { MapPinIcon } from "@heroicons/react/24/outline";
import ContactUsForm from "./ContactForm";

const Contact = () => {
  const icons = [
    <EnvelopeIcon className="w-[32px] text-secondray  " />,
    <PhoneIcon className="w-[32px] text-secondray  " />,
    <MapPinIcon className="w-[32px] text-secondray  " />,
  ];
  const { t } = useTranslation("contact");
  const SectionTitle = t("SectionTitle");
  const subText = t("subText");
  const form: ContactForm = t("form", { returnObjects: true });
  const contectCard: ContactCard[] = t("contectCard", { returnObjects: true });

  return (
    <>
      <div className=" flex  flex-col   gap-5 border-b-2">
        <h2 className={styles.sectionHeadText}>{SectionTitle}</h2>
        <p className="mb-5 md:text-[18px] text-[16px]">{subText}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <ContactUsForm form={form} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 md:p-10">
          {contectCard.map((item, i) => (
            <>
              <div
                key={i}
                className="flex flex-col gap-2 py-3 px-5  rounded-lg  justify-center  cursor-pointer "
              >
                {icons[i]}

                <h6 className="text-[20px] font-bold">{item.label}</h6>
                <p>{item.text}</p>
                <a
                  href={
                    item.info === "+966596544376"
                      ? `tel:${item?.info}`
                      : `mailto:${item?.info}`
                  }
                  className="underline"
                >
                  {item?.info}
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
