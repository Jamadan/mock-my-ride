export const mockFunctions = functionsToMock => {
  Object.keys(functionsToMock).forEach(fn => {
    if ({}.toString.call(functionsToMock[fn]) === '[object Function]') {
      Object.assign(
        functionsToMock,
        {},
        {
          [fn]: jest.fn().mockImplementation(functionsToMock[fn])
        }
      );
    }
  });
};

export const setMockValue = (fn, value) => {
  fn.mockImplementation(() => value);
};
