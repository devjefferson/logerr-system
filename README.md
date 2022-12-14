[![Sponsor][sponsor-badge]][sponsor]
[![NPM version][npm-badge]][npm]
[![TypeScript version][ts-badge]][typescript-4-2]
[![npm downloads](https://img.shields.io/npm/dm/logerr-system.svg?style=flat-square)](https://npm-stat.com/charts.html?package=logerr-system)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/logerr-system)

# logerr-system

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

# Init Supabase

Creating an instance
You can create a new instance of logerr with a custom config.

LogErr.ts

```sh
import { initSupabase } from "logerr-system";

export const { captureException } = initSupabase({
  baseUrl,
  apiKey,
  authorization,
  project,
});
```

DTO database

```sh
    {
      "id": "int8 | string | number",
      "error": "string | varchar",
      "objError": "JSON | string | text",
      "project": "string | varchar",
      "created_at": "string | timestamptz",
    }
```

## Usage Supabase

```sh
import { captureException } from "./LogErr"; // Select LogErr.ts

try{

} catch (err){

  captureException("message err", err);
}

```

# Init Api

Creating an instance
You can create a new instance of logerr with a custom config.

LogErr.ts

```sh
import { initApi } from "logerr-system";

export const { captureException } = initApi({
  baseUrl,
  authorization,
  project,
});
```

## Usage Api

```sh
import { captureException } from "./LogErr"; // Select LogErr.ts

try{

} catch (err){

  captureException("message err", err);
}

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
[sponsor-badge]: https://img.shields.io/badge/???-Sponsor-fc0fb5.svg
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
