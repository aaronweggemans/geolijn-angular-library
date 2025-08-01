import {Coordinaten, is2DPolygon, isMultipolygon, isPoint, isPolygon} from "../type-helper";

/**
 * Deze functie draait altijd de coordinaten om in een array van coordinaten stelsel.
 * Eigenlijk switched het je coordinaten van of latitude naar longitude, of longitude naar latitude
 *
 * ```typescript
 * const westbetuwe: number[] = [51.83206, 5.34657];
 * const isInNederland: boolean = latitudeLongitudeCasting(westbetuwe);
 * // [5.34657, 51.83206]
 * ```
 */
export function latitudeLongitudeCasting(coordinaten: Coordinaten): Coordinaten {
  if(isPoint(coordinaten)) {
    return switchCoordinates(coordinaten);
  }

  if(is2DPolygon(coordinaten)) {
    return coordinaten.map(switchCoordinates);
  }

  if(isPolygon(coordinaten)) {
    return coordinaten.map((coordinaat) => coordinaat.map(switchCoordinates));
  }

  if(isMultipolygon(coordinaten)) {
    return coordinaten.map((coordinaat) => coordinaat.map((nestInCoordinaat) => nestInCoordinaat.map(switchCoordinates)));
  }

  if(Array.isArray(coordinaten)) {
    return [];
  }

  throw Error('Dit type wordt niet ondersteunt...');
}

/**
 * Draait daadwerkelijk de coordinaten om
 * @param coordinaat
 */
function switchCoordinates(coordinaat: number[]): number[] {
  return [coordinaat[1], coordinaat[0]];
}
