import React from "react";

import { Media } from "../Media";

import { Post, Project, Service } from "../../../utils/payload-types";
import { CMSLink } from "../CMSLink";
import { Route, Routes } from "react-router-dom";
import Page from "../../../Components/Page";

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

  const { slug, title, media, hero, layout } = doc || {};

  const titleToUse = titleFromProps || title;
  const href = `/${relationTo}/${slug}`;

  return (
    <>
     <div
  className="relative items-center justify-center flex max-w-[28rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-5">
  <CMSLink url={href}>
  <div className="relative m-0 overflow-hidden text-gray-700 flex-shrink bg-transparent rounded-none shadow-none bg-clip-border h-42">
    <Media resource={media} className="h-48" />
  </div>
  </CMSLink>
  <CMSLink url={href}>
    <h4 className="block p-2 font-sans min-h-16 antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    {titleToUse}
    </h4>
   
  </CMSLink>
 
</div> 
    </>
  );
};
