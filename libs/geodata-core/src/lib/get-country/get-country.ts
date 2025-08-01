import plainCountryList from '../../assets/countries.json';

export function getGeoJsonCountries(): Countries {
  return plainCountryList as Countries;
}

export function getAllFeaturesOfCountries(): Feature[] {
  return (plainCountryList as Countries).features;
}

export function getRandomCountry(): Feature {
  const features: Feature[] = (plainCountryList as Countries).features;
  const randomIndex: number = Math.floor(Math.random() * features.length);
  return features[randomIndex];
}

export type Countries = {
  type: string
  name: string
  crs: Crs
  features: Feature[]
}

export type Crs = {
  type: string
  properties: Properties
}

export type Properties = {
  name: string
}

export type Feature = {
  type: string
  properties: Properties2
  geometry: Geometry
}

export type Properties2 = {
  name: string
  "ISO3166-1-Alpha-3": string
  "ISO3166-1-Alpha-2": string
}

export type Geometry = {
  type: string
  coordinates: number[][][]
}
