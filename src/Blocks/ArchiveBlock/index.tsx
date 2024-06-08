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
  const { introContent, id, relationTo, populateBy, limit } = props;


 
  return (
    <div id={`block-${id}`} className={"relative"}>
      {introContent && (
        <div className={styles.padding}>
          <RichText content={introContent} />
        </div>
      )}
      <CollectionArchive
        populateBy={populateBy||undefined}
        relationTo={relationTo}
        limit={limit||5}
        sort="-publishedAt"
      />
    </div>
  );
};

export default ArchiveBlock;
