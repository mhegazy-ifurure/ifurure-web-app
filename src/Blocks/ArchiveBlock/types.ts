/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Page } from "../../utils/payload-types";
// @ts-expect-error
export type ArchiveBlockProps = Extract<Page['layout'][0], { blockType: 'archive' }>
