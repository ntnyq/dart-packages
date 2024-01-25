import { describe, expect, it } from 'vitest'
import { RESERVED_WORD_LIST, validateDartPackageName } from 'validate-dart-package-name'

const validNames: string[] = ['foo', 'foo_bar', 'foo1', 'foo_bar1', 'foo_bar_1', 'foo_bar_baz']
const invalidNames: string[] = [
  'foo-bar',
  'FooBar',
  'Foo_Bar',
  '1_foo_bar',
  '123',
  '1_2_3',
  '1-2-3',
  '_1_2',
  '_foo_bar',

  // Reserved words
  ...RESERVED_WORD_LIST,
]

describe('validateDartPackageName', () => {
  it('should throw when name is an empty string', () => {
    expect(() => validateDartPackageName('')).toThrow('package name must be a non-empty string')
  })

  it('all names are valid', () => {
    validNames.forEach(name => {
      expect(validateDartPackageName(name)).toBeTruthy()
    })
  })

  it('all names are invalid', () => {
    invalidNames.forEach(name => {
      expect(validateDartPackageName(name)).toBeFalsy()
    })
  })
})
