export default function convertAreaToSquareFeet(areaInInches: number): number {
  if (areaInInches < 0) {
    throw new Error("Area cannot be negative");
  }
  return areaInInches / 144; // 1 square foot = 144 square inches
}

