/**
 * Dart reserved words
 * @see {@link https://dart.dev/language/keywords}
 */
export const RESERVED_WORD_LIST = [
  'abstract',
  'else',
  'import',
  'show',
  'as',
  'enum',
  'in',
  'static',
  'assert',
  'export',
  'interface',
  'super',
  'async',
  'extends',
  'is',
  'switch',
  'await',
  'extension',
  'late',
  'sync',
  'base',
  'external',
  'library',
  'this',
  'break',
  'factory',
  'mixin',
  'throw',
  'case',
  'false',
  'new',
  'true',
  'catch',
  'final',
  'null',
  'try',
  'class',
  'on',
  'typedef',
  'const',
  'finally',
  'operator',
  'var',
  'continue',
  'for',
  'part',
  'void',
  'covariant',
  'Function',
  'required',
  'when',
  'default',
  'get',
  'rethrow',
  'while',
  'deferred',
  'hide',
  'return',
  'with',
  'do',
  'if',
  'sealed',
  'yield',
  'dynamic',
  'implements',
  'set',
]

/**
 * Check if a given string is a valid dart package name
 *
 * @param name package name
 * @returns true if the package name is valid
 *
 * @see {@link https://dart.dev/tools/pub/pubspec#name}
 *
 * @example
 * ```
 * import { validateDartPackageName } from 'validate-dart-package-name'
 * validateDartPackageName('foo_bar')  // true
 * ```
 */
export function validateDartPackageName(name: string) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('package name must be a non-empty string')
  }
  if (RESERVED_WORD_LIST.includes(name)) return false
  return /^[a-z][\d_a-z]*$/.test(name)
}
