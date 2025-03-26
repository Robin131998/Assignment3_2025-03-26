import calculatePaintForCoats from './paintRequiredForMultipleCoats';

describe('calculatePaintForCoats', () => {
  test('should calculate paint for multiple coats correctly', () => {
    expect(calculatePaintForCoats(500, 100, 3)).toBe(15);
  });

  test('should throw error for invalid values', () => {
    expect(() => calculatePaintForCoats(-500, 100, 3)).toThrow("All values must be positive");
  });
});

