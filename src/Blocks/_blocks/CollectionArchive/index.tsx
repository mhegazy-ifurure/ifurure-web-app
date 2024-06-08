/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

import React from "react";

import { Card } from "../Card";

import { Post, Project, Service } from "../../../utils/payload-types";
import { useTranslation } from "react-i18next";
import { styles } from "../../../utils/style";
import Slider from "react-slick";

export type Props = {
  className?: string;
  limit?: number;
  populateBy?: "collection" | "selection";

  relationTo?: "posts" | "projects" | "services";
  showPageRange?: boolean;
  sort?: string;
};

export const CollectionArchive: React.FC<Props> = (props) => {
  const { className, relationTo } = props;

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { t } = useTranslation(relationTo);

  const collections: (Service | Post | Project)[] = t("data", {
    returnObjects: true,
  });

  return (
    <div className={[className].filter(Boolean).join(" ")}>
      <div />

      <div className={styles.paddingX}>
        <Slider {...settings}>
          {collections.map((result, index) => {
            return (
              <div>
                <Card key={index} doc={result} relationTo={relationTo} />
              </div>
            );
          })}
        </Slider>
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
