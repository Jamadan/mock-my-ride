import { mockFile, mockFunction } from './';
mockFile('../../test/test-func');

const functions = require('../../test/test-func');
const isString = functions.default;
const isNumber = functions.isNumber;
const someValue = functions.someValue;

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
    mockFunction(isNumber, false);
    expect(isNumber()).toEqual(false);

    mockFunction(isNumber, true);
    expect(isNumber()).toEqual(true);

    mockFunction(isNumber, 1);
    expect(isNumber()).toEqual(1);
  });
});
