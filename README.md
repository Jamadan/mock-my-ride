# mock-my-ride

Creates an object copy wiith all functions returns as a jest.mock that returns the origina, implementation
Also creates a function to mock the return value of an imported function

# Installation

`npm install mock-my-ride`

# Usage example

```javascript
import { mockFunctions, setMockValue } from 'mock-my-ride';

mockFunctions(require('./sub-func'));
import isStringSub, { isNumberSub } from './sub-func';

// Functions under test
import isString, { isNumber } from './index';

describe('isString', () => {
  it('return true when isStringSub is true', () => {
    setMockValue(isStringSub, true);

    expect(isString()).toEqual(true);
  });
});

describe('isNumber', () => {
  it('return true when isNumberSub is true', () => {
    setMockValue(isNumberSub, true);

    expect(isNumber()).toEqual(true);
  });
});

```
