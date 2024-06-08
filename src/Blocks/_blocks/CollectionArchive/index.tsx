/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

import React from "react";
import Slider from "react-slick";

import { Card } from "../Card";

import { Post, Project, Service } from "../../../utils/payload-types";
import { useTranslation } from "react-i18next";
import { styles } from "../../../utils/style";
import i18next from "i18next";
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";


export type Props = {
 
  className?: string;
  limit?: number;
  populateBy?: "collection" | "selection";
  
  relationTo?: "posts" | "projects" | "services";
  showPageRange?: boolean;
  sort?: string;
};

export const CollectionArchive: React.FC<Props> = (props) => {
  const {
    className,
    relationTo,
  } = props;


  let settings = {
    dots: true,
    dir:i18next.dir(),
    lazyLoad: true,
    className: "center",
  
    // dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  const {t} =useTranslation(relationTo)

const collections :(Service|Post |Project)[]= t('data' ,{returnObjects:true})

  return (
    <div
      className={[className]
        .filter(Boolean)
        .join(" ")}
    >
      <div  />
    
       
        <div className={styles.paddingX}>
          <Slider {...settings} >
            {collections.map((result, index) => {
              if (typeof result === "object" && result !== null) {
                return (
                 
                    <div >
                      <Card key={index} doc={result} relationTo={relationTo}  />
                    </div>
                
                );
              }

              return null;
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