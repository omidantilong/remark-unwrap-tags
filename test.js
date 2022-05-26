import test from 'tape'
import {remark} from 'remark'
import remarkHtml from 'remark-html'
import {walkAndUnwrap} from './index.js'

import input from './__fixtures__/h3/input.js'
import expected from './__fixtures__/h3/expected.js'

test('remarkUnwrapTags', (t) => {
  t.equal(
    JSON.stringify(walkAndUnwrap(input)),
    JSON.stringify(expected),
    'unwraps nested h3'
  )
  t.end()
})
