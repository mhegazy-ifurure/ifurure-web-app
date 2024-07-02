/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { Media as MediaType, Page } from "../../../utils/payload-types";
import { Media } from "../../_blocks/Media";
import RichText from "../../_blocks/RichText";
import { CMSLink } from "../../_blocks/CMSLink";

const TechnicalSupport: React.FC<{
  enableTechnicalSupport?: boolean | null;
  media?: string | MediaType;
  richText: {
    [k: string]: unknown;
  }[];
  enableLink?: boolean | null;
  link?: {
    type?: ("reference" | "custom") | null;
    newTab?: boolean | null;
    reference?:
      | ({
          relationTo: "pages";
          value: string | Page;
        } | null)
      | ({
          relationTo: "media";
          value: string | MediaType;
        } | null);
    url?: string | null;
    label: string;
    icon?: string | MediaType | null;
    appearance?: ("default" | "primary" | "secondary" | "teritary") | null;
  };
}> = ({ media, richText, enableLink, link }) => {




  return (
    <>
      <div className="flex flex-col">
        {typeof media == "object" && <Media resource={media} />}
        <RichText content={richText} />
        {/* @ts-ignore */}
        {enableLink && <CMSLink {...link} />}
      </div>
    </>
  );
};

export default TechnicalSupport;
