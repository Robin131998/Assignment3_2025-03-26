export default function calculateCanvasSize(length: string, width: string): number {
  const parsedLength = parseInt(length, 10);
  const parsedWidth = parseInt(width, 10);

  if (isNaN(parsedLength) || isNaN(parsedWidth)) {
    throw new Error("Both length and width must be valid numeric strings.");
  }

  return parsedLength * parsedWidth;
}

