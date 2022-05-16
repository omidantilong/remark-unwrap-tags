# remark-unwrap-tags

## What is this?

This package is a remark plugin that searches for nested `<p>` tags in arbitrary html embedded in markdown and unwraps them. 

It was designed to solve the problem of Next.js hydration errors caused by nested tags producing different results on the server vs browser. 

MDX, unlike commonmark, applies formatting to things inside html tags - which is great until your editor starts trying to wrap lines. 

In practice, this plugin visits every paragraph node and checks if the parent is a mdxJsxFlowElement. If so it replaces the parent's `children` prop with its own `children`. 

There is probably a better way to do this.

It's inspired by [remark-unwrap-images](/remarkjs/remark-unwrap-images).

**unified** is a project that transforms content with abstract syntax trees
(ASTs).
**remark** adds support for markdown to unified.
**mdast** is the markdown AST that remark uses.
This is a remark plugin that transforms mdast.

## When should I use this?

If you just want to completely disable markdown parsing inside html in mdx files, as per Commonmark spec.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install remark-unwrap-tags
```

## Use

Say we have the following file `example.mdx`.

```markdown
# Hello world

Lorem ipsum.

<div>
  <span>
    This is a super long paragraph that could wrap onto
    multiple lines. Without the plugin, mdx will
    insert <p> tags inside the <span>.
  </span>
</div>
```

And our module `example.js` looks as follows:

```js
import {read} from 'to-vfile'
import {remark} from 'remark'
import remarkHtml from 'remark-html'
import remarkUnwrapTags from 'remark-unwrap-tags'

main()

async function main() {
  const file = await remark()
    .use(remarkUnwrapTags)
    .use(remarkHtml)
    .process(await read('example.md'))

  console.log(String(file))
}
```

Now running `node example.js` yields:

```html
<h1>Hello world</h1>
<span>This is a super long paragraph {...}</span> 
```

## API

This package exports no identifiers.
The default export is `remarkUnwrapTags`.

#### `unified().use(remarkUnwrapTags)`

Plugin to remove the wrapping paragraph for arbitrary html content.
There are no options.

## Types

This package is fully typed with [TypeScript][].
There are no extra exported types.

## Security

Use of `remark-unwrap-tags` does not involve **[rehype][]** (**[hast][]**) or
user content, it only removes some existing nodes, so there are no openings for
[cross-site scripting (XSS)][xss] attacks.


## License

[MIT][license]