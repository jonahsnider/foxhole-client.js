# foxhole-client.js

[![npm](https://img.shields.io/npm/v/foxhole-client)](https://npmjs.com/package/foxhole-client)
[![Build Status](https://github.com/jonahsnider/foxhole-client.js/workflows/CI/badge.svg)](https://github.com/jonahsnider/foxhole-client.js/actions)
[![codecov](https://codecov.io/gh/jonahsnider/foxhole-client.js/branch/main/graph/badge.svg?token=FQ5BP2A1XO)](https://codecov.io/gh/jonahsnider/foxhole-client.js)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

A [Foxhole War API](https://github.com/clapfoot/warapi#readme) client for the web and Node.js.

[It also includes complete typings for the API](#Api%20Types).

```js
import Foxhole from 'foxhole-client';

const foxhole = new Foxhole();

const warState = await foxhole.war.fetchState();

console.log(warState);
```

## Installation

```sh
npm i foxhole-client
# or
yarn add foxhole-client
# or
pnpm i foxhole-client
```

## Usage

```js
import Foxhole from 'foxhole-client';

const foxhole = new Foxhole();
```

Please refer to [the generated documentation](https://foxhole-clientjs.netlify.app/classes/client) for more detailed info.

You may also want to view the [API report](./api.md).

### API Types

If you're using TypeScript and are just interested in [the API types](https://foxhole-clientjs.netlify.app/modules/api) you can access them like so:

```ts
import type { Api } from 'foxhole-client';

const warState: Api.War.State = /* ... */;
```
