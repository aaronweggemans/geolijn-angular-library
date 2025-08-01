## ✅ PR Checklist – Angular Library Development
Voordat je deze PR aanmaakt, check of je onderstaande punten hebt afgerond:

## 🔨 Code & Structuur
- [ ] Code volgt de Angular style guide
- [ ] Alle nieuwe functies/classes zijn gedocumenteerd met JSDoc/TypeDoc
- [ ] Publieke API’s zijn duidelijk en minimalistisch gehouden (geen onnodige exports)
- [ ] Library build werkt: `ng build <library>` is succesvol

## 🧪 Testen
- [ ] Nieuwe functionaliteit heeft unit tests
- [ ] Alle bestaande tests draaien groen: `npm run test`
- [ ] Indien relevant: edge cases zijn getest (lege geometrie, ongeldige input, etc.)

## 📦 Library-specifiek
- [ ] De `package.json` is up-to-date (versie, peerDependencies, enz.)
- [ ] Publieke exports zijn gecontroleerd in `public-api.ts`
- [ ] Geen ongewenste bestanden worden meegepakt in de npm publish (check ng-package.json)

## 📝 Documentatie
- [ ] README of docs zijn geüpdatet met nieuwe functionaliteit
- [ ] In de demo-app is de voorbeeldcode bijgewerkt

## 🔍 Kwaliteitscontrole
- [ ] `npm run lint` geeft geen fouten
- [ ] Code is geformatteerd (Prettier / ESLint)
- [ ] Geen console.logs of debug code achtergelaten

## 🚀 Wat gebeurt er na merge?
- [ ] Versie wordt verhoogd (volgens semver)
- [ ] Nieuwe build en eventueel publish naar npm
