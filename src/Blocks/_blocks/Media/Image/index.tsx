
import React from "react";

import { Props as MediaProps } from "../types";

export const Image: React.FC<MediaProps> = (props) => {
  const {
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    resource,

  } = props;

  const [isLoading, setIsLoading] = React.useState(true);

  let alt = "";
  let src =  "";

  if (!src && resource && typeof resource !== "string") {
    const { filename: fullFilename, alt: altFromResource } = resource;

    alt = altFromResource;

    const filename = fullFilename;

    src = `${import.meta.env.REACT_APP_MEDIA}/${filename}`;
  }

  // NOTE: this is used by the browser to determine which image to download at different screen sizes

  return (
    <img
      className={[isLoading && "bg-gray-300", "w-full", imgClassName]
        .filter(Boolean)
        .join(" ")}
      src={src}
      alt={alt || ""}
      onClick={onClick}
      onLoad={() => {
        setIsLoading(false);
        if (typeof onLoadFromProps === "function") {
          onLoadFromProps();
        }
      }}
    />
  );
};
