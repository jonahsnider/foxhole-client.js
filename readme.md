# foxhole.js

[![Build Status](https://github.com/jonahsnider/foxhole.js/workflows/CI/badge.svg)](https://github.com/jonahsnider/foxhole.js/actions)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![codecov](https://codecov.io/gh/jonahsnider/foxhole.js/branch/main/graph/badge.svg?token=FQ5BP2A1XO)](https://codecov.io/gh/jonahsnider/foxhole.js)

A [Foxhole War API](https://github.com/clapfoot/warapi#readme) client for the web and Node.js.

[It also includes complete typings for the API](#Api%20Types).

```js
import Foxhole from 'foxhole';

const foxhole = new Foxhole();

const warState = await foxhole.war.fetchState();

console.log(warState);
```

## Installation

```sh
npm i foxhole
# or
yarn add foxhole
# or
pnpm i foxhole
```

## Usage

```js
import Foxhole from 'foxhole';

const foxhole = new Foxhole();
```

Please refer to [the generated documentation](https://foxholejs.netlify.app/classes/client) for more detailed info.

You may also want to view the [API report](./api.md).

### API Types

If you're using TypeScript and are just interested in [the API types](https://foxholejs.netlify.app/modules/api) you can access them like so:

```ts
import type { Api } from 'foxhole';

const warState: Api.War.State = /* ... */;
```
