import { is2DPolygon, isMultipolygon, isPolygon } from '../type-helper';

/**
 * De eerste input van de functie verwacht een 2dPolygon een polygon of een multipolygon.
 * Op basis van deze informatie wordt het centrum van dit vormpje geretouneerd
 * @param coordinaten
 */
export function getCenter(
  coordinaten: number[][] | number[][][] | number[][][][]
): [number, number] {
  if (is2DPolygon(coordinaten)) {
    return calculateCenter(coordinaten);
  }

  if (isPolygon(coordinaten)) {
    // Multiple polygons because multipolygon has encalve.
    const polygonCenters = coordinaten.map(poly => calculateCenter(poly));

    // Calculate with the found enclave
    return calculateCenter(polygonCenters);
  }

  if (isMultipolygon(coordinaten)) {
    // Multiple polygons because multipolygon has encalve.
    const polygonCenters = coordinaten.flatMap(poly =>
      poly.map(calculateCenter)
    );

    // Calculate with the found enclave
    return calculateCenter(polygonCenters);
  }

  throw Error('Dit type wordt niet ondersteunt...');
}

function calculateCenter(coordinaten: number[][]): [number, number] {
  const countCoordinates = (acc: number[], [lat, lon]: number[]) => [
    acc[0] + lat,
    acc[1] + lon,
  ];
  const [sumLatitude, sumLongitude] = coordinaten.reduce(
    countCoordinates,
    [0, 0]
  );
  const centrumLatitude = sumLatitude / coordinaten.length;
  const centrumLongitude = sumLongitude / coordinaten.length;

  return [centrumLatitude, centrumLongitude];
}
