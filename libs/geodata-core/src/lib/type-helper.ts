/**
 * Check of de array een 1D array is (Point)
 * @param coords
 */
export function isPoint(coords: Coordinaten): coords is number[] {
  return Array.isArray(coords) && typeof coords[0] === 'number';
}

/**
 * Check of de array een 2D array is (Polygoon 2D)
 * @param coords
 */
export function is2DPolygon(coords: Coordinaten): coords is number[][] {
  return Array.isArray(coords) && Array.isArray(coords[0]) && typeof coords[0][0] === 'number';
}
/**
 * Check of de array een 3D array is (Polygon)
 * @param coords
 */
export function isPolygon(coords: Coordinaten): coords is number[][][] {
  return (
    Array.isArray(coords) &&
    Array.isArray(coords[0]) &&
    Array.isArray(coords[0][0]) &&
    typeof coords[0][0][0] === 'number'
  );
}

/**
 * Check of de array een 4D array is (MultiPolygon)
 * @param coords
 */
export function isMultipolygon(coords: Coordinaten): coords is number[][][][] {
  return (
    Array.isArray(coords) &&
    Array.isArray(coords[0]) &&
    Array.isArray(coords[0][0]) &&
    Array.isArray(coords[0][0][0]) &&
    typeof coords[0][0][0][0] === 'number'
  );
}

/**
 * De geondersteunde coordinaat types
 */
export type Coordinaten = number[] | number[][] | number[][][] | number[][][][];
