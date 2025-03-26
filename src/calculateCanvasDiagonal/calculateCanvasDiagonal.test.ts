import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should calculate diagonal correctly for positive values', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5);
  });

  test('should handle invalid strings by returning NaN', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN();
  });
});

