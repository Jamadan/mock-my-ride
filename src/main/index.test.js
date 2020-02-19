import { mockFunctions, setMockValue } from './';
mockFunctions(require('../../test/test-func'));
import isString, { isNumber, someValue } from '../../test/test-func';

describe('mockFile', () => {
  it('returns mocked default function', () => {
    expect(isString._isMockFunction).toEqual(true);
  });

  it('returns mocked function', () => {
    expect(isNumber._isMockFunction).toEqual(true);
  });

  it('returns original objects', () => {
    expect(someValue).toEqual({ foo: 'bar' });
  });

  it('mocks function values', () => {
    setMockValue(isNumber, true);
    expect(isNumber()).toEqual(true);

    setMockValue(isNumber, true);
    expect(isNumber()).toEqual(true);

    setMockValue(isNumber, 1);
    expect(isNumber()).toEqual(1);
  });
});
