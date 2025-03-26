export default function estimatePaintingTime(area: number, rate: number): number {
  if (area <= 0 || rate <= 0) {
    throw new Error("Area and rate must be positive");
  }
  return area / rate;
}

