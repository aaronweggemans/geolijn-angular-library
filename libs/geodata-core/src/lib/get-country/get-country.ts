import plainCountryList from '../../assets/countries.json';

/**
 * Geeft de volledige lijst van landen terug in GeoJSON-formaat.
 *
 * De data is afkomstig uit een statisch JSON-bestand en wordt geretourneerd
 * als een object van het type `Countries`. Dit GeoJSON-object bevat onder
 * andere metadata en een `features`-lijst met individuele landen.
 *
 * @returns {Countries} Een GeoJSON-verzameling van alle landen.
 */
export function getGeoJsonCountries(): Countries {
  return plainCountryList as Countries;
}

/**
 * Haalt alle individuele land-features op uit het GeoJSON-bestand.
 *
 * Elk land wordt weergegeven als een `Feature`-object binnen de
 * `features`-array van het GeoJSON-object. Deze functie retourneert
 * enkel die array, zonder overige metadata.
 *
 * @returns {Feature[]} Een lijst van alle landen als GeoJSON-features.
 */
export function getAllFeaturesOfCountries(): Feature[] {
  return (plainCountryList as Countries).features;
}

/**
 * Haalt één willekeurig land op uit de lijst van landen (GeoJSON).
 *
 * De functie kiest willekeurig één `Feature`-object uit de lijst van landen
 * met behulp van `Math.random()` en retourneert dat object.
 * Het resultaat is een enkel land in GeoJSON-featureformaat.
 *
 * @returns {Feature} Een willekeurig gekozen land als GeoJSON-feature.
 */
export function getRandomCountry(): Feature {
  const features: Feature[] = (plainCountryList as Countries).features;
  const randomIndex: number = Math.floor(Math.random() * features.length);
  return features[randomIndex];
}

export interface Countries {
  type: string;
  name: string;
  crs: Crs;
  features: Feature[];
}

export interface Crs {
  type: string;
  properties: Properties;
}

export interface Properties {
  name: string;
}

export interface Feature {
  type: string;
  properties: Properties2;
  geometry: Geometry;
}

export interface Properties2 {
  name: string;
  'ISO3166-1-Alpha-3': string;
  'ISO3166-1-Alpha-2': string;
}

export interface Geometry {
  type: string;
  coordinates: number[][][];
}
