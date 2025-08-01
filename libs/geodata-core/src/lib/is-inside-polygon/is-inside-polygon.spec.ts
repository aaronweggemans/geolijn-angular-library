import {isInsidePolygon} from "./is-inside-polygon";

describe('IsInsidePolygon', () => {
  const randomNetherlandsPoint = [51.832066, 5.346578];
  const randomMexicoPoint = [22.444202, -101.727058];
  const randomAustraliaPoint = [-23.6993531,133.8698302];
  const randomMadagascarPoint = [-20.946098, 46.326809];
  const randomSiberiaPoint = [68.49053, 93.46805];

  const polygonAreaNetherlands = [
    [53.707785, 3.454509], // North sea
    [53.707785, 7.596039], // North Germany
    [50.473985, 6.996883], // South Germany
    [50.192177, 2.834330] // France
  ];

  const polygonAreaAustralia = [
    [-12.4258881,130.8509066], // Darwin
    [-32.0396375,115.6318855], // Perth
    [-33.8478053,150.602326], // Sydney
  ];

  // Random polygon in the area of Siberia
  const polygonAreaSiberia = [
    [72.62146, 98.24470],
    [71.11808, 85.32478],
    [65.93020, 66.69196],
    [58.97475, 68.80134],
    [54.34450, 85.32478],
    [55.95146, 104.04548],
    [61.67094, 125.75446],
    [67.12032, 128.21540],
    [71.42846, 125.49079],
    [75.06273, 109.58259],
  ]

  it('should return true when the Netherlands point is inside the area of the Netherlands', () => {
    const inside = isInsidePolygon(randomNetherlandsPoint, polygonAreaNetherlands);
    expect(inside).toBe(true);
  });

  it('should return false when the point is in mexico but the polygon is around the Netherlands', () => {
    const inside = isInsidePolygon(randomMexicoPoint, polygonAreaNetherlands);
    expect(inside).toBe(false);
  });

  it('should return true when the Australia point is inside the area of the Australia', () => {
    const inside = isInsidePolygon(randomAustraliaPoint, polygonAreaAustralia);
    expect(inside).toBe(true);
  });

  it('should return false when the point is in Madagascar but the polygon is around Australia', () => {
    const inside = isInsidePolygon(randomMadagascarPoint, polygonAreaAustralia);
    expect(inside).toBe(false);
  });

  it('should return true when the Siberia point is inside the Siberia area', () => {
    const inside = isInsidePolygon(randomSiberiaPoint, polygonAreaSiberia);
    expect(inside).toBe(true);
  });

  it('should return false when a point is not inside the Siberia area', () => {
    const inside = isInsidePolygon(randomNetherlandsPoint, polygonAreaSiberia);
    expect(inside).toBe(false);
  });
});
