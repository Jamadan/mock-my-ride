# mock-my-ride

Creates an object copy wiith all functions returns as a jest.mock that returns the origina, implementation
Also creates a function to mock the return value of an imported function

# Installation

`npm install mock-my-ride`

# Usage example

```javascript
import * as mockMyRide from 'mock-my-ride');
// OR
// const mockMyRide = require('mock-my-ride');

mockMyRide.mockFile('./filename');

import fnUnderTest from './testSubject';
import fnToMock from './filename';

describe('fnUnderTest', () => {
    it('returns true when fnToMock is true', () => {
      mockMyRide.mockFunctionValue(fnToMock, true);

      expect(fnUnderTest()).toEqual(true);
    }
}
```
