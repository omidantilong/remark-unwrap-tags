import test from 'tape'
import {remark} from 'remark'
import remarkHtml from 'remark-html'
import {walkTheTree} from './index.js'

import input from './__fixtures__/h3/input.js'
import expected from './__fixtures__/h3/expected.js'

test('remarkUnwrapTags', (t) => {
  t.equal(
    JSON.stringify(walkTheTree(input)),
    JSON.stringify(expected),
    'walks the tree'
  )
  t.end()
})
