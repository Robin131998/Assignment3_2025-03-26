import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("should return the correct area for valid numeric strings", () => {
    expect(calculateCanvasSize("10", "100")).toEqual(1000);
    expect(calculateCanvasSize("5", "5")).toEqual(25);
    expect(calculateCanvasSize("12", "10")).toEqual(120);
  });

  test("should throw an error for non-numeric inputs", () => {
    expect(() => calculateCanvasSize("a", "10")).toThrow("Both length and width must be valid numeric strings.");
    expect(() => calculateCanvasSize("10", "b")).toThrow("Both length and width must be valid numeric strings.");
    expect(() => calculateCanvasSize("a", "b")).toThrow("Both length and width must be valid numeric strings.");
  });

  test("should throw an error if one or both inputs are empty", () => {
    expect(() => calculateCanvasSize("", "10")).toThrow("Both length and width must be valid numeric strings.");
    expect(() => calculateCanvasSize("10", "")).toThrow("Both length and width must be valid numeric strings.");
  });
});

