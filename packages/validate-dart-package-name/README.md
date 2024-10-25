# validate-dart-package-name

> Check if a given string is a valid dart package name.

[![NPM VERSION](https://img.shields.io/npm/v/validate-dart-package-name.svg)](https://www.npmjs.com/package/validate-dart-package-name)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/validate-dart-package-name.svg)](https://www.npmjs.com/package/validate-dart-package-name)

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
