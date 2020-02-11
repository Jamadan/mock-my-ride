export const mockFile = functionsToMock => {
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

  return functionsToMock;
};

export const mockFunction = (fn, value) => {
  fn.mockImplementation(() => value);
};
