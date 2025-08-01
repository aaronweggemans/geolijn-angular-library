# Geolijn Angular Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Inzien van de packages

Dit project kan je draaien door middel van `ng serve`. Bij het runnen van `ng serve` wordt er een 
lokaal een servertje opgespint die de applicatie `apps/demo-app` zal gaan tonen. In dit project kun
je voorbeelden zien hoe de verschillende libraries zijn ontwikkeld en hoe deze werken.

## 📦 Publish een Angular Library naar npm
Zo publish je naar de npm registry. In deze uitleg is geodata-core gebruikt omdat 
tegen de tijd van het schrijven van deze README, er verder nog geen libraries zijn ontwikkeld.

### Build je library
Run in de root van je Angular workspace:

```bash
ng build geodata-core
```

Na de build verschijnt er een map: `dist/geodata-core/`. 
Alles wat je moet publishen staat in deze folder voor dat specifieke project.

### Check de naam in package.json
Ga naar de dist map en de `package.json` om te dubbel checken of deze naam klopt.

```bash
cd dist/geolijn-geodata-core
cat package.json
```

Voor een scoped package:

```json
{
  "name": "@geolijn/geodata-core",
  "version": "0.0.1",
  "main": "bundles/geodata-core.umd.js",
  "module": "fesm2022/geodata-core.mjs",
  "typings": "geodata-core.d.ts"
}
```

Belangrijk: Scoped packages (@geolijn/...) zijn default private, dus je moet straks --access public gebruiken bij publish.

### Login bij npm
Als je nog niet ingelogd bent:

```bash
npm login
```
Geef je npm-account gegevens op.

### Publish!
Gebruik `--access` public alleen bij scoped packages. In ons geval is dit nodig omdat `(@geolijn/...)` is gesuffixt voor deze library. Nog steeds in de dist/geolijn-geodata-core map:

```bash
npm publish --access public
```

### Gebruik je library
Nu kun je hem in een ander project installeren en daarna importeren in de import van je Angular component.

```bash
npm install @geolijn/geodata-core
```

