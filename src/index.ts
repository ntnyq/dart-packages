/**
 * Dart reserved words
 * @see {@link https://dart.dev/language/keywords}
 */
export const RESERVED_WORD_LIST = [
  'abstract',
  'as',
  'assert',
  'async',
  'await',
  'base',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'covariant',
  'default',
  'deferred',
  'do',
  'dynamic',
  'else',
  'enum',
  'export',
  'extends',
  'extension',
  'external',
  'factory',
  'false',
  'final',
  'finally',
  'for',
  'Function',
  'get',
  'hide',
  'if',
  'implements',
  'import',
  'in',
  'interface',
  'is',
  'late',
  'library',
  'mixin',
  'new',
  'null',
  'of',
  'on',
  'operator',
  'part',
  'required',
  'rethrow',
  'return',
  'sealed',
  'set',
  'show',
  'static',
  'super',
  'switch',
  'sync',
  'this',
  'throw',
  'true',
  'try',
  'type',
  'typedef',
  'var',
  'void',
  'when',
  'while',
  'with',
  'yield',
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
