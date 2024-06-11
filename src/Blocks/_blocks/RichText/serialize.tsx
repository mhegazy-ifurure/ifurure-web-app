/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import { CMSLink } from "../CMSLink";
import { Label } from "../Label";
import { LargeBody } from "../LargeBody";

// eslint-disable-next-line no-use-before-define
type Children = Leaf[];

type Leaf = {
  type: string;
  value?: {
    url: string;
    alt: string;
  };
  textAlign?: "center" | "left" | "right";
  children?: Children;
  url?: string;
  [key: string]: unknown;
};

const serialize = (children?: Children): React.ReactNode[] =>
  children?.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      if (node.bold) {
        
        text = <strong key={i}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

     
      if (node.underline) {
        text = (
          <span style={{ textDecoration: "underline" }} key={i}>
            {text}
          </span>
        );
      }

      if (node.strikethrough) {
        text = (
          <span style={{ textDecoration: "line-through" }} key={i}>
            {text}
          </span>
        );
      }

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

let alignText=''
    if (node.textAlign) {
      
      switch (node.textAlign) {
        case "center":
          alignText = 'text-center' 
          break;
        case "right":
          alignText = "text-right"
          break;

        default:
          alignText = "text-left"
          break;
      }
    }
console.log(alignText);

    switch (node.type) {
      case "h1":
        return (
          <h1
            className={"md:text-[48px]  text-[40px] mb-5 leading-[120%] " +alignText}
            key={i}
          >
            {serialize(node?.children)}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={"md:text-[40px] text-[32px] mb-4 leading-[120%] " +alignText}
            key={i}
          >
            {serialize(node?.children)}
          </h2>
        );
      case "h3":
        return (
          <h3
            className={"md:text-[32px] text-[24px] mb-3 leading-[120%] "+alignText}
            key={i}
          >
            {serialize(node?.children)}
          </h3>
        );
      case "h4":
        return (
          <h4
            className={"md:text-[24px] text-[20px] mb-3 leading-[130%] "+alignText}
            key={i}
          >
            {serialize(node?.children)}
          </h4>
        );
      case "h5":
        return (
          <h5
            className={"md:text-[20px] text-[18px] mb-3 leading-[140%] "+alignText}
            key={i}
          >
            {serialize(node?.children)}
          </h5>
        );
      case "h6":
        return (
          <h6
            className={"md:text-[18px] text-[14px] mb-3 leading-[140%] "+alignText}
            key={i}
          >
            {serialize(node?.children)}
          </h6>
        );
      case "quote":
        return <blockquote key={i}>{serialize(node?.children)}</blockquote>;
      case "ul":
        return (
          <ul
            className={" list-disc   marker:text-[20px] marker:font-bold list-inside "+alignText}
            key={i}
          >
            {serialize(node?.children)}
          </ul>
        );
      case "ol":
        return (
          <ol
            className={"list-decimal marker:text-teritary marker:text-[20px] marker:font-bold list-inside "+alignText}
            key={i}
          >
            {serialize(node.children)}
          </ol>
        );
      case "li":
        return (
          <li className={"mb-2  "+alignText} key={i}>
            {serialize(node.children)}
          </li>
        );
      case "link":
        return (
          <CMSLink
            key={i}
            type={node.linkType === "internal" ? "reference" : "custom"}
            url={node.url}
            reference={node.doc as any}
            newTab={Boolean(node?.newTab)}
          >
            {serialize(node?.children)}
          </CMSLink>
        );

      case "label":
        return <Label key={i}>{serialize(node?.children)}</Label>;

      case "large-body": {
        return <LargeBody key={i}>{serialize(node?.children)}</LargeBody>;
      }

      default:
        return <p key={i}>{serialize(node?.children)}</p>;
    }
  }) || [];

export default serialize;
