import React from "react";
import { Media as MediaType } from "../../../utils/payload-types";
import { Media } from "../../_blocks/Media";

const ContactCard: React.FC<{
  item: {
    type?: ("mail" | "phone" | "location") | null;
    title: string;
    subtext?: string | null;
    icon: string | MediaType;
    contactInfo: string;
    id?: string | null;
  };
}> = ({ item }) => {
  return (
    <>
      <div className="flex flex-col gap-2 py-3 px-5  rounded-2xl bg-white text-black  justify-center  cursor-pointer ">
        <Media resource={item.icon} className="w-[20px]" />

        <h6 className=" text-[20px] capitalize leading-[140%] ">
          {item.title}
        </h6>
        <p className="text-[16px] md:text-[18px]  ">{item.subtext}</p>
        <a
          href={
            item.type === "phone"
              ? `tel:${item?.contactInfo}`
              : item.type === "mail"
              ? `mailto:${item?.contactInfo}`
              : ``
          }
          className="underline"
        >
          {item?.contactInfo}
        </a>
      </div>
    </>
  );
};

export default ContactCard;
