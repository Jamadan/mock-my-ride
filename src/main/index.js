export const mockFile = mockFilename => {
  jest.mock(mockFilename.toString(), () => {
    const mockOriginal = require.requireActual(mockFilename.toString());
    const fns = Object.keys(mockOriginal);
    const mocked = {};

    fns.forEach(fn => {
      if ({}.toString.call(mockOriginal[fn]) === '[object Function]') {
        Object.assign(mocked, mocked, {
          [fn]: jest.fn().mockImplementation(mockOriginal[fn]),
        });
      } else {
        Object.assign(mocked, mocked, {
          [fn]: mockOriginal[fn],
        });
      }
    });

    return mocked;
  });
};

export const mockFunction = (fn, value) => {
  fn.mockImplementation(() => value);
};