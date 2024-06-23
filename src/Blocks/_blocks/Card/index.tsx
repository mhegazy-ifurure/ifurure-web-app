import React from "react";

import { Media } from "../Media";

import { Post, Project, Service } from "../../../utils/payload-types";
import { CMSLink } from "../CMSLink";

export const Card: React.FC<{
  alignItems?: "center";
  className?: string;
  hideImagesOnMobile?: boolean;
  title?: string;
  relationTo?: "projects" | "posts" | "services";
  doc: Project | Post | Service;
  orientation?: "horizontal" | "vertical";
}> = (props) => {
  const { relationTo, title: titleFromProps, doc } = props;

  const { slug, title, media } = doc || {};

  const titleToUse = titleFromProps || title;
  const href = `/${relationTo}/${slug}`;

  return (
    <>
     <div
  className="relative items-center justify-center  flex w-full flex-col overflow-hidden rounded-xl  text-gray-700 shadow-md  my-5">
  <CMSLink className="block w-full" url={href}>
  <div className="relative  overflow-hidden text-gray-700  bg-transparent rounded-none bg-clip-border bg-white  ">
    <Media resource={media} className="max-h-56 w-full" />
  </div>
  </CMSLink>
  <CMSLink url={href}>
    <h4 className=" block p-2  min-h-16 antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    {titleToUse}
    </h4>
   
  </CMSLink>
 
</div> 
    </>
  );
};
