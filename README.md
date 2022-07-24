# convert-log

[![TypeScript version][ts-badge]][typescript-4-7]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]

Challenge to create a console application that retrieves a log file and converts the content to a specific format

It receives a `sourceUrl` and a `targetPath` as parameters

## Example

`yarn convert http://logstorage.com/minhaCdn1.txt ./output/minhaCdn1.txt`

## Source log file example

```
312|200|HIT|"GET /robots.txt HTTP/1.1"|100.2
101|200|MISS|"POST /myImages HTTP/1.1"|319.4
199|404|MISS|"GET /not-found HTTP/1.1"|142.9
312|200|INVALIDATE|"GET /robots.txt HTTP/1.1"|245.1
```

## Formatted log file example

```
#Version: 1.0
#Date: 15/12/2017 23:01:06
#Fields: provider http-method status-code uri-path time-taken
response-size cache-status
"MINHA CDN" GET 200 /robots.txt 100 312 HIT
"MINHA CDN" POST 200 /myImages 319 101 MISS
"MINHA CDN" GET 404 /not-found 143 199 MISS
"MINHA CDN" GET 200 /robots.txt 245 312 REFRESH_HIT
```

## Requirements

Have Node >= 16 installed

## How to run:

Go inside the project folder `convert-log`

### Install the dependencies:

```
yarn
```

or

```
npm install
```

### Build the application:

```
yarn build
```

or

```
npm run build
```

### Run the application:

```
yarn convert https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt ./output/minhaCdn.txt
```

or

```
npm run convert https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt ./output/minhaCdn.txt
```

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.7-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2016.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[gha-badge]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-4-7]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/jsynowiec
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467?s=20
[gh-actions]: https://github.com/features/actions
[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[sindresorhus-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[nodejs-esm]: https://nodejs.org/docs/latest-v16.x/api/esm.html
[ts47-esm]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#esm-nodejs
[axios]: https://www.npmjs.com/package/axios
[date-fns]: https://www.npmjs.com/package/date-fns
[dot-env]: https://www.npmjs.com/package/dot-env
