import { assertType, describe, expectTypeOf, it } from 'vitest'
import { validateDartPackageName } from 'validate-dart-package-name'

describe('typecheck', () => {
  it('should return type match', () => {
    expectTypeOf(validateDartPackageName).returns.toBeBoolean()
  })

  it('should params type match', () => {
    assertType<(name: string) => boolean>(validateDartPackageName)

    expectTypeOf(validateDartPackageName).parameter(0).toBeString()
  })
})
