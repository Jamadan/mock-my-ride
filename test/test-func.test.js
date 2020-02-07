import isString, { isNumber, someValue } from './test-func';

describe('isString', () => {
  it('returns true for string', () => {
    expect(isString('10')).toEqual(true);
  });

  it('returns false for not string', () => {
    expect(isString(10)).toEqual(false);
  });
});

describe('isNumber', () => {
  it('returns true for number', () => {
    expect(isNumber(10)).toEqual(true);
  });

  it('returns false for not number', () => {
    expect(isNumber('jam')).toEqual(false);
  });
});

describe('someValue', () => {
  it('returns true for string', () => {
    expect(someValue).toEqual({ foo: 'bar' });
  });
});
