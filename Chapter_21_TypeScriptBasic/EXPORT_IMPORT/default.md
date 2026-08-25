# `default` export — explained

This note explains the JavaScript/TypeScript `default` export and how it differs from named exports. Includes examples for ESM and CommonJS and guidance on when to use each style.

## Overview

- A module can export multiple *named* bindings (functions, constants, classes).
- A module can also have one *default* export — a single value that represents the module's primary export.

## Default export (ESM)

Syntax:

```js
// default export (function)
export default function sayHello(name) {
  return `Hello ${name}`;
}
```

Importing a default export:

```js
import sayHello from './sayHello.js';
console.log(sayHello('Vishnu'));
```

Notes:
- The importer chooses the local name (`sayHello` above).
- A module may only have one `default` export.

## Named exports (ESM)

Syntax:

```js
// named exports
export function formatName(n) { return n.toUpperCase(); }
export const BASE_URL = 'https://example.com';
```

Importing named exports:

```js
import { formatName, BASE_URL } from './utils.js';
```

You can also rename during import:

```js
import { formatName as fmt } from './utils.js';
```

## Importing both default and named

```js
export default class App { }
export function helper(){ }

// import both
import App, { helper } from './module.js';
```

## CommonJS equivalence

Default-like export with CommonJS:

```js
// module.js (CommonJS)
module.exports = function main(){ /* ... */ };

// consumer
const main = require('./module');
```

Named-style with CommonJS:

```js
exports.foo = () => {};
exports.bar = 1;

// consumer
const { foo, bar } = require('./module');
```

Warning: mixing ESM `export default` with CommonJS `module.exports` can be confusing; use one module system consistently or use interop helpers from your bundler/transpiler.

## When to use default vs named

- Use a `default` export when the module has a single primary thing it provides (a React component, a default class, a main function).
- Use named exports when the module exposes several utilities or constants; named exports are clearer to consumers and better for editor tooling and tree-shaking.

## Practical tips

- Node.js: to use `import`/`export` with `.js` files, either set `"type": "module"` in the nearest `package.json` or use `.mjs` file extension.
- In TypeScript, you can use `export default` and `export` as usual; `ts-node` or your build tool must be configured for ESM if you run with native `node`.
- To import JSON in ESM under Node 18+, use an import assertion: `import cfg from './file.json' assert { type: 'json' };`.

## Examples summary

```js
// default export
export default function main() {}
// import
import main from './main.js';

// named exports
export function a() {}
export const b = 1;
// import
import { a, b } from './x.js';

// both
export default function primary() {}
export function helper() {}
import primary, { helper } from './pkg.js';
```

---

This file is intended as a quick reference. Tell me if you want more examples (TypeScript interfaces, re-exports, or bundler-specific notes).
