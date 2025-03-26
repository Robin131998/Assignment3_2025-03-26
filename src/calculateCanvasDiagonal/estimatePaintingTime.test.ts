import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should estimate painting time correctly', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
  });

  test('should throw error for non-positive values', () => {
    expect(() => estimatePaintingTime(-100, 10)).toThrow("Area and rate must be positive");
  });
});

