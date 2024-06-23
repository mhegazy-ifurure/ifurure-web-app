/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ElementType } from "react";

// import classes from './index.module.scss'
import { Link } from "react-router-dom";

export type Props = {
  label?: string;
  appearance?: "primary" | "secondary" | "teritary" | null;
  el?: "button" | "link" | "a";
  onClick?: () => void;
  href?: string;
  newTab?: boolean | null;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  invert?: boolean;
};

export const Button: React.FC<Props> = ({
  el: elFromProps = "link",
  className,
  label,
  newTab,
  appearance,
  href,
  onClick,
  type = "button",
  disabled,
}) => {
  let el = elFromProps;

  const newTabProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

 

  const content = (
    <div className={className}>
      <span>{label}</span>
    </div>
  );

  if (onClick || type === "submit") el = "button";

  if (el === "link") {
    return (
      <Link to={href || ""} {...newTabProps} onClick={onClick}>
        {content}
      </Link>
    );
  }

  const Element: ElementType = el;

  return (
    <Element
      href={href}
      type={type}
      {...newTabProps}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </Element>
  );
};
