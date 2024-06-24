import React from "react";
import { ProjectItem } from "../../../utils/ifuture.types";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
// import i18next from "i18next";

const ProjectCard: React.FC<{ project: ProjectItem ,img:string }> = ({ project ,img }) => {
  const { title, description ,features } = project;
  
  return (
    <>
      <div className="w-full rounded overflow-hidden my-10 border">
        <img className="w-full" src={img} alt={"image"}  loading="lazy"/>
        <div className="flex justify-between flex-wrap py-3">
          <div className="md:px-6 md:py-4 px-2 py-1">
            <h5 className="font-bold md:text-[18px] text-[16px] md:mb-2">{title}</h5>

            <p className="text-gray-700 md:text-[16px] text-[14px] my-3 ">{description}</p>
            <ul className="flex flex-col gap-3">
              {features.map((feature ,i)=><><li key={i} dangerouslySetInnerHTML={{__html:feature}} ></li></>)}
            </ul>
          </div>
          {/* <div className="md:px-6 md:py-4 px-2 py-1">
            <a
              href={link.path}
              className=" text-gray-500 hover:text-gray-900 font-bold  rounded flex items-center justify-center text-[12px]"
            >
              {link.label} {i18next.dir()=='rtl'?<ChevronLeftIcon className="w-[24px] inline-block"/>:<ChevronRightIcon className="w-[24px] inline-block"/>}
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
