type Point = {
  x: number;
  y: number;
};

export function computeMass(p: Point) {
  return Math.sqrt(p.x * p.x + p.y * p.y);
}
