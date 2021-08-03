# foxhole-ts

[![Build Status](https://github.com/jonahsnider/foxhole-ts/workflows/CI/badge.svg)](https://github.com/jonahsnider/foxhole-ts/actions)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Foxhole Game API library for the web and Node.js.

## Contributing

### Prequisites

This project uses [Yarn](https://yarnpkg.com) 2 to manage dependencies and run scripts.
After cloning the repository you can use this command to install dependencies:

```sh
yarn
```

### Building

Run the `build` script to compile the TypeScript source code into JavaScript in the `tsc_output` folder.

### Style

This project uses [Prettier](https://prettier.io) to validate the formatting and style across the codebase.

You can run Prettier in the project with this command:

```sh
yarn run style
```

### Linting

This project uses [XO](https://github.com/xojs/xo) (which uses [ESLint](https://eslint.org) and some plugins internally) to perform static analysis of the source code.
It reports issues like unused variables or not following best practices to ensure the project is well-written.

```sh
yarn run lint
```

### Testing

Unit tests are stored alongside source files (ex. `config.ts` would have `config.test.ts`).
You can run the tests with the `test` script:

```sh
yarn run test
```

#### Coverage

This will generate a `coverage` folder which has a breakdown of coverage of the project.
The CI will upload the coverage information to [CodeCov](https://codecov.io) which can be [viewed here](https://codecov.io/gh/jonahsnider/foxhole-ts).
