# validate-dart-package-name

> Check if a given string is a valid dart package name.

[![CI](https://github.com/ntnyq/validate-dart-package-name/workflows/CI/badge.svg)](https://github.com/ntnyq/validate-dart-package-name/actions)
[![NPM VERSION](https://img.shields.io/npm/v/validate-dart-package-name.svg)](https://www.npmjs.com/package/validate-dart-package-name)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/validate-dart-package-name.svg)](https://www.npmjs.com/package/validate-dart-package-name)
[![CODECOV](https://codecov.io/github/ntnyq/validate-dart-package-name/branch/main/graph/badge.svg)](https://codecov.io/github/ntnyq/validate-dart-package-name)
[![LICENSE](https://img.shields.io/github/license/ntnyq/validate-dart-package-name.svg)](https://github.com/ntnyq/validate-dart-package-name/blob/main/LICENSE)

## Install

```bash
npm install validate-dart-package-name
```

```bash
yarn add validate-dart-package-name
```

```bash
pnpm add validate-dart-package-name
```

## Usage

```ts
import { validateDartPackageName } from 'validate-dart-package-name'

validateDartPackageName('foo_bar') // true

validateDartPackageName('foo-bar') // false
validateDartPackageName('FooBar') // false
validateDartPackageName('123') // false
validateDartPackageName('1_2_3') // false
validateDartPackageName('_foo_bar') // false
```

## Related

- [The pubspec file - name](https://dart.dev/tools/pub/pubspec#name)

## License

[MIT](./LICENSE) License © 2024-PRESENT [ntnyq](https://github.com/ntnyq)
