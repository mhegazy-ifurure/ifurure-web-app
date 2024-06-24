/* eslint-disable @typescript-eslint/no-unused-vars */
import { ServiceItem } from "../../../utils/ifuture.types";
// import { styles } from "../../utils/style";

const ServiceCard:React.FC<{service:ServiceItem ,img:string ,id:string}> = ({service ,img ,id}) => {

const {title ,text} = service

  return (
    <>
      <div
        className={ " grid grid-cols-1 md:grid-cols-2 md:my-24 my-5   md:gap-10"} id={id}
      >
        <div className="flex flex-col gap-2 md:gap-5 items my-5 justify-center order-last md:order-first ">
          <h3 className="text-[16px]  font-bold capitalize md:text-[24px]">{title}</h3>
          <p className="md:text-[16px] text-[14px]">{text}</p>

          <div className="flex gap-4 mt-10 items-center">
            {/* {links?.map((item, i) => (
              <a
                key={i}
                href="#"
                className={styles.secondaryBtn}
              >
                {item.label}
              </a>
            ))} */}
          </div>
        </div>
        <div className="flex items-center ">
          <img src={img} alt="imge" loading='eager'className="w-full" />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
