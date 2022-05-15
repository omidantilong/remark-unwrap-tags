/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').LinkReference} LinkReference
 */

import {visit, SKIP} from 'unist-util-visit'
import {whitespace} from 'hast-util-whitespace'

const unknown = 1
const containsImage = 2
const containsOther = 3

/**
 * Plugin to remove the wrapping paragraph for images.
 *
 * @type {import('unified').Plugin<void[], Root>}
 */
export default function remarkUnwrapTags() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if(node.children) {
        node.children.forEach((child) => {
          if(child.value) {
            child.value = child.value.replaceAll("\n", '').replaceAll("\r"," ").toString()
          }
        })
      }
      //console.log(node.children)
      if(parent.name==='p') {
        parent.children = node.children
      }
      if (
        parent &&
        typeof index === 'number' &&
        applicable(node) === containsImage
      ) {
        //console.log(parent.children)
        //parent.children.splice(index, 1, ...node.children)
        // return [SKIP, index]
      }
    })
  }
}

/**
 * @param {Paragraph|Link|LinkReference} node
 * @param {boolean} [inLink]
 * @returns {1|2|3}
 */
function applicable(node, inLink) {
  /** @type {1|2|3} */
  let image = unknown
  let index = -1

  while (++index < node.children.length) {
    const child = node.children[index]

    if (whitespace(child)) {
      // White space is fine.
    } else if (child.type === 'image' || child.type==='text' || child.type === 'imageReference') {
      image = containsImage
      if(child.type==='text') {
        child.value = child.value.replace("\n", '').toString()
      }

    } else if (
      !inLink &&
      (child.type === 'link' || child.type === 'linkReference')
    ) {
      const linkResult = applicable(child, true)

      if (linkResult === containsOther) {
        return containsOther
      }

      if (linkResult === containsImage) {
        image = containsImage
      }
    } else {
      return containsOther
    }
  }

  return image
}
