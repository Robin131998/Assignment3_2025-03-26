export default function calculatePaintForCoats(area: number, coverage: number, coats: number): number {
  if (area <= 0 || coverage <= 0 || coats <= 0) {
    throw new Error("All values must be positive");
  }
  return (area / coverage) * coats;
}

