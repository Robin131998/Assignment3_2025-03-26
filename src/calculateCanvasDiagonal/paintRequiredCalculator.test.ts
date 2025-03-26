import calculatePaintRequired from './paintRequiredCalculator';

describe('calculatePaintRequired', () => {
  test('should calculate paint required correctly', () => {
    expect(calculatePaintRequired(500, 100)).toBe(5);
  });

  test('should throw error for invalid values', () => {
    expect(() => calculatePaintRequired(-500, 100)).toThrow("Area and coverage must be positive");
  });
});

