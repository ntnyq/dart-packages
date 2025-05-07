import { reservedWords } from 'dart-reserved-words'

/**
 * Check if a given string is a valid dart package name
 *
 * @param name - package name
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
  if (reservedWords.includes(name)) {
    return false
  }
  if (name.endsWith('_')) {
    return false
  }
  if (name.includes('__')) {
    return false
  }
  return /^[a-z][\d_a-z]*$/.test(name)
}
