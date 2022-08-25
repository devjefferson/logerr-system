[![Sponsor][sponsor-badge]][sponsor]
[![NPM version][npm-badge]][npm]
[![TypeScript version][ts-badge]][typescript-4-2]
[![Node.js version][nodejs-badge]][nodejs]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

# logerr-system

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

## Getting Started

Make sure to be used with the latest Active LTS release version of [Node.js][nodejs].

```sh
yarn add logerr-system
npm install logerr-system
```

Init

```sh
import { initSupabase } from "logerr-system";

export const { captureException } = initSupabase({
  baseUrl,
  apiKey,
  authorization,
  project,
});
```

Exemple

```sh
import { captureException } from "../services/LogErr";

try{

} catch (err){

  captureException("message err", err);
}

```

### Clone repository

```sh
git clone https://github.com/_devjefferson/logerr-system
cd logerr-system
yarn install or npm install
```

### Download latest release

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
[npm-badge]: https://img.shields.io/npm/v/logerr-system
[npm]: https://www.npmjs.com/package/logerr-system
