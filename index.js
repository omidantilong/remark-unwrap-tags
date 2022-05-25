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
  console.log(this)
  return (tree) => {
    walkTheTree(tree)
  }
}

export const walkTheTree = (tree) => {
  console.log(tree)
  visit(tree, 'paragraph', (node, index, parent) => {
    //console.log(node, index, parent)

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
    //console.log(JSON.stringify(parent))
    if (parent.type === 'mdxJsxFlowElement') {
      parent.children = node.children
    }
  })
  return tree
}
