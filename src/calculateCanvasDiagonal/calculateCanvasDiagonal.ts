export default function calculateCanvasDiagonal(length: string, width: string): number {
  const parsedLength = parseFloat(length);
  const parsedWidth = parseFloat(width);

  if (isNaN(parsedLength) || isNaN(parsedWidth)) {
    return NaN;
  }

  const absoluteLength = Math.abs(parsedLength);
  const absoluteWidth = Math.abs(parsedWidth);

  return Math.sqrt(absoluteLength ** 2 + absoluteWidth ** 2); // Pythagoras theorem
}

