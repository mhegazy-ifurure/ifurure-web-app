/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import ContentBlock from "./Content";
import MediaBlock from "./MediaBlock";
import MediaContent from "./MediaContent";
import ArchiveBlock from "./ArchiveBlock";
import { Page } from "../utils/payload-types";
import { toKebabCase } from "../utils/toKebabCase";

const blockComponents = {
  content: ContentBlock,
  mediaBlock: MediaBlock,
  mediaContent: MediaContent,
  archive: ArchiveBlock,
};

const Blocks: React.FC<{
  // @ts-ignore
  blocks: Page["layout"][0][];
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <div key={index}>
                  <Block id={toKebabCase(blockName)} {...block} />
                </div>
              );
            }
          }
          return null;
        })}
      </>
    );
  }
  return null;
};

export default Blocks;
