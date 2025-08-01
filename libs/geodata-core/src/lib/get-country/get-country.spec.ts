import {getGeoJsonCountries, getRandomCountry, getAllFeaturesOfCountries, Countries} from "./get-country";

jest.mock('../../assets/countries.json', () => ({
  type: "FeatureCollection",
  features: [
    { type: "Feature", properties: { name: "Netherlands" } },
    { type: "Feature", properties: { name: "Germany" } },
    { type: "Feature", properties: { name: "France" } }
  ]
} as Countries));

describe('GetCountry', () => {
  it('should be able to get all geo json countries', () => {
    const countries = getGeoJsonCountries();
    expect(countries.type).toBe('FeatureCollection')
  });

  it('should be able to get all the features of countries', () => {
    const countries = getAllFeaturesOfCountries();
    expect(countries[0].properties.name).toBe('Netherlands')
    expect(countries[1].properties.name).toBe('Germany')
    expect(countries[2].properties.name).toBe('France')
  });

  it('should be able to generate a random countries', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5);
    const result = getRandomCountry();
    expect(result.properties.name).toBe('Germany');
    jest.restoreAllMocks();
  });
});
