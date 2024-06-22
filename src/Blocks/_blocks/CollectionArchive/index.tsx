/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

import React from "react";

import { Card } from "../Card";

import { Post, Project, Service } from "../../../utils/payload-types";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import CardSlider from "../../Slider";

export type Props = {
  className?: string;
  limit?: number;
  populateBy?: "collection" | "selection";

  relationTo?: "posts" | "projects" | "services";
  showPageRange?: boolean;
  sort?: string;
};

export const CollectionArchive: React.FC<Props> = (props) => {
  const { className, relationTo, limit } = props;
  // // @ts-ignore
  // let settings ={
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500
  // }

  const { t } = useTranslation(relationTo);

  const collections: (Service | Post | Project)[] = t("data", {
    returnObjects: true,
  });

  return (
    <div className={[className].filter(Boolean).join(" ")}>
      

      <div className={" relative"}>
        <CardSlider cards={collections} relationTo={relationTo} slidesToShow={limit}/>
      </div>
    </div>
  );
};

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block"}}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block",color:"blue" }}
//       onClick={onClick}
//     />
//   );
// }
