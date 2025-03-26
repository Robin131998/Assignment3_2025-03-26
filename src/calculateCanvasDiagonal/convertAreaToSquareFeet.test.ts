import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test('should convert area correctly', () => {
    expect(convertAreaToSquareFeet(288)).toBe(2);
  });

  test('should throw error for negative area', () => {
    expect(() => convertAreaToSquareFeet(-144)).toThrow("Area cannot be negative");
  });
});

