/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

import React from "react";

import { Card } from "../Card";

import { Blog, Post, Project, Service } from "../../../utils/payload-types";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "react-awesome-slider/dist/styles.css";
import { useCollection } from "../../../utils/apiContext";
import Loading from "../../../Components/Loading";

export type Props = {
  className?: string;
  limit?: number;
  populateBy?: "collection" | "selection";

  relationTo: "posts" | "projects" | "services" |'blogs';
  showPageRange?: boolean;
  sort?: string;
};

export const CollectionArchive: React.FC<Props> = (props) => {
  const { className, relationTo, limit } = props;
  const res = useCollection(relationTo)
  const { t } = useTranslation(relationTo);
  if (res.en.isLoading || res.ar.isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }


  const collections: (Service | Post |Blog|Project)[] = t("data", {
    returnObjects: true,
  });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: limit,
    slidesToScroll: 1,
    autoplay: true,
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
          initialSlide: 2,
          dots:true
        }
      },
     
    ]
  };
  return (
    <div className={[className].filter(Boolean).join(" ")}>
      <div className={"relative overflow-hidden py-10 "}>
        <Slider {...settings}>
          {collections.length>0&&collections.map((collection, index) => {
            return (
              <div key={index} className={'p-2'}>
                <Card  doc={collection} relationTo={relationTo} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
