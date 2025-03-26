export default function calculatePaintRequired(area: number, coverage: number): number {
  if (area <= 0 || coverage <= 0) {
    throw new Error("Area and coverage must be positive");
  }
  return area / coverage;
}

