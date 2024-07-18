// import React from "react";
// import { Link } from "react-router-dom";
// import { styles } from "../../utils/style";

// type Props = {
//   type: "reference" | "custom";
//   url?: "string";
//   label?: string;
//   appearance?: "primary" | "secondary" | "none";
//   value: "string";
//   newTab?: boolean;
//   onClick?: () => void;
// };

// const CMSLink: React.FC<Props> = ({
//   type,
//   label,
//   appearance,
//   value,
//   url,
//   newTab,
//   onClick,
// }) => {
//   if (type === "custom") {
//     return (
//       <a
//         href={url}
//         target={newTab ? "_blank" : "_self"}
//         onClick={onClick}
//         className={
//           appearance == "secondary" ? styles.secondaryBtn : styles.primaryBtn
//         }
//       >
//         {label}
//       </a>
//     );
//   }

//   return (
//     <>
//       <Link
//         target={newTab ? "_blank" : "_self"}
//         to={value}
//         onClick={onClick}
//         className={`${
//           appearance == "secondary"
//             ? " border border-solid"
//             : "bg-teritary  border-0"
//         }  px-5 py-3  text-white rounded-[10px] capitalize font-medium  text-center no-underline md:text-[16px] text-[14px] text-nowrap  cursor-pointer transform ease-in-out duration-300 transition hover:scale-110
//       `}
//       >
//         {label}
//       </Link>
//     </>
//   );
// };

// export default CMSLink;

import React from "react";

import { Button, Props as ButtonProps } from "../Button";
import { Media as MediaType, Page } from "../../../utils/payload-types";
import { Link } from "react-router-dom";
import { styles } from "../../../utils/style";
import { Media } from "../Media";

type CMSLinkType = {
  type?: ("reference" | "custom") | null;
  url?: string | null;
  newTab?: boolean | null;
  reference?: {
    value: string | Page;
    relationTo: "pages";
  } | null;
  icon?: MediaType;
  label?: string;
  appearance?: ButtonProps["appearance"];
  children?: React.ReactNode;
  className?: string;
  invert?: ButtonProps["invert"];
  onClick?: VoidFunction;
};

export const CMSLink: React.FC<CMSLinkType> = ({
  type,
  icon,
  url,
  newTab,
  reference,
  label,
  appearance,
  children,
  className,
  invert,
  onClick,
}) => {
  switch (appearance) {
    case "primary":
      className += ` ${styles.primaryBtn}`;
      break;
    case "secondary":
      className += ` ${styles.secondaryBtn}`;
      break;
    case "teritary":
      className += ` ${styles.teritaryBtn}`;
      break;

    default:
      className +=`${styles.defaultBtn}`;
      break;
  }
  const href =
    type === "reference" &&
    typeof reference?.value === "object" &&
    reference.value.slug
      ? `${
          reference?.relationTo !== "pages" ? `/${reference?.relationTo}` : ""
        }/${reference.value.slug}`
      : url;

  if (!href) return null;

  if (!appearance) {
    const newTabProps = newTab
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    if (typeof icon == "object") {
      <Link {...newTabProps} to={href} className={className}>
        <Media resource={icon} />
      </Link>;
    }

    return (
      <Link {...newTabProps} to={href} className={className}>
        {label && label}
        {children && children}
      </Link>
    );
  }

  return (
    <Button
      className={className}
      newTab={newTab}
      href={href}
      label={label}
      invert={invert}
      icon={icon}
      onClick={onClick}
    />
  );
};
