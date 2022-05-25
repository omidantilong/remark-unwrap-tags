/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').LinkReference} LinkReference
 */

import {visit} from 'unist-util-visit'
/**
 * Plugin to remove the wrapping paragraph for images.
 *
 * @type {import('unified').Plugin<void[], Root>}
 */
export default function remarkUnwrapTags() {
  return (tree) => {
    walkAndUnwrap(tree)
  }
}

export const walkAndUnwrap = (tree) => {
  visit(tree, 'paragraph', (node, index, parent) => {
    if (node.children) {
      node.children.forEach((child) => {
        if (child && child.value) {
          child.value = child.value
            .replaceAll('\n', '')
            .replaceAll('\r', ' ')
            .toString()
        }
      })
    }
    if (parent.type === 'mdxJsxFlowElement') {
      parent.children = node.children
    }
  })
  return tree
}
