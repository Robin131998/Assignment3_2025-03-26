export default function calculateCanvasPerimeter(length: string, width: string): number {
  const parsedLength = parseFloat(length);
  const parsedWidth = parseFloat(width);

  if (isNaN(parsedLength) || isNaN(parsedWidth)) {
    throw new Error("Invalid input");
  }

  return 2 * (parsedLength + parsedWidth);
}

