/**
 * Deze functie bepaalt of een gegeven punt zich binnen een polygoon bevindt.
 * Dit wordt gedaan op basis van latitude en longitude.
 *
 * ```typescript
 * const westbetuwe: number[] = [51.832066, 5.346578];
 * const netherlands: number[][] = [
 *   [53.707785, 3.454509],
 *   [53.707785, 7.596039],
 *   [50.473985, 6.996883],
 *   [50.192177, 2.834330]
 * ];
 *
 * // Resultaat: true (het punt ligt binnen de polygon)
 * const isInNederland: boolean = isInsidePolygon(westbetuwe, netherlands);
 * ```
 */
export function isInsidePolygon(punt: number[], polygoon: number[][]): boolean {
  const [x, y] = punt;

  return polygoon.reduce((inside: boolean, next: number[], index: number) => {
    const following = polygoon[(index + 1) % polygoon.length];
    const [xi, yi] = next;
    const [xj, yj] = following;

    const intersect =
      (yi > y) !== (yj > y) &&
      x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    return intersect ? !inside : inside;
  }, false);
}

