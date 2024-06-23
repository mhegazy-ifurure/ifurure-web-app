/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

import React from "react";

import { Card } from "../Card";

import { Post, Project, Service } from "../../../utils/payload-types";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "react-awesome-slider/dist/styles.css";
import { styles } from "../../../utils/style";

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

  const { t } = useTranslation(relationTo);

  const collections: (Service | Post | Project)[] = t("data", {
    returnObjects: true,
  });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: limit,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: limit,
          slidesToScroll:1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
     
    ]
  };
  return (
    <div className={[className].filter(Boolean).join(" ")}>
      <div className={"relative overflow-hidden py-10 "}>
        <Slider {...settings}>
          {collections.map((collection, index) => {
            return (
              <div key={index} className={styles.paddingX}>
                <Card  doc={collection} relationTo={relationTo} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
