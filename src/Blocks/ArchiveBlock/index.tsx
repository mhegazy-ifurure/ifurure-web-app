/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { ArchiveBlockProps } from "./types";
import RichText from "../_blocks/RichText";
import { styles } from "../../utils/style";
import { CollectionArchive } from "../_blocks/CollectionArchive";

const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string;
  }
> = (props) => {
  const { introContent, id, relationTo, populateBy, limit, backgroundColor } =
    props;

  return (
    <div
      id={`block-${id}`}
      className={
        styles.padding +
        ` relative ${
          (backgroundColor == "161616" || backgroundColor == "000937") &&
          "text-white"
        }`
      }
      style={{ backgroundColor: `#${backgroundColor}` }}
    >
      {introContent && (
        <div>
          <RichText content={introContent} />
        </div>
      )}
      <CollectionArchive
        populateBy={populateBy || undefined}
        relationTo={relationTo}
        limit={limit || 5}
        sort="-publishedAt"
      />
    </div>
  );
};

export default ArchiveBlock;
