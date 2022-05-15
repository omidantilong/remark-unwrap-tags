/**
 * Plugin to remove the wrapping paragraph for images.
 *
 * @type {import('unified').Plugin<void[], Root>}
 */
export default function remarkUnwrapTags():
  | void
  | import('unified').Transformer<import('mdast').Root, import('mdast').Root>
export type Root = import('mdast').Root
export type Paragraph = import('mdast').Paragraph
export type Link = import('mdast').Link
export type LinkReference = import('mdast').LinkReference
