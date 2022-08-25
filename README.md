[![Sponsor][sponsor-badge]][sponsor]
[![NPM version][npm-badge]][npm]
[![TypeScript version][ts-badge]][typescript-4-2]
[![Node.js version][nodejs-badge]][nodejs]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

# logerr

👩🏻‍💻 Developer Ready: An easy-to-start template to speed up building your NodeJS library.

🏃🏽 Instant Value: All basic tools included and configured:

- [TypeScript][typescript] [4.2][typescript-4-2]
- [ESLint][eslint] with some initial rules recommendation
- [Jest][jest] for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- [Prettier][prettier] to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations: test, release
- Simple example of TypeScript code and unit test
- .editorconfig for consistent file format
- Environments management via [Volta][volta]
- Example configuration for [GitHub Actions][gh-actions]

## Getting Started

Make sure to be used with the latest Active LTS release version of [Node.js][nodejs].

### Use as a repository template

Click the **[Use template][repo-template-action]** link (or the green button). Now start adding your code in the `src` and unit tests with `*.spec.ts`.

### Clone repository

To clone the repository use the following commands:

```sh
git clone https://github.com/_devjefferson/logerr
cd logerr
npm install
```

### Download latest release

Download and unzip current `master` branch or one of tags:

```sh
wget https://github.com/_devjefferson/logerr/archive/master.zip -O logerr.zip
unzip logerr.zip && rm logerr.zip
```

## Available Scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests
- `release` - bump the version, commit, create release tag and publish to NPM registry

## License

Licensed under the MIT. See the [LICENSE](https://github.com/_devjefferson/logerr/blob/master/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.2-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.20-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[gha-badge]: https://github.com/_devjefferson/logerr/workflows/build/badge.svg
[gha-ci]: https://github.com/_devjefferson/logerr/actions
[typescript]: https://www.typescriptlang.org/
[typescript-4-2]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/_devjefferson/logerr/blob/master/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/_devjefferson
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467?s=20
[gh-actions]: https://github.com/features/actions
[travis]: https://travis-ci.org
[repo-template-action]: https://github.com/_devjefferson/logerr/generate
[npm-badge]: https://img.shields.io/npm/v/logerr
[npm]: https://www.npmjs.com/package/logerr
