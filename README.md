# tms-mikrofrontend-template-vitets

Kan brukes som utgangspunkt for å opprette nye mikrofrontends i Min Side.

# Tilpass repo-et

1. Søk etter og erstatt tms-mikrofrontend-template med det som skal være navnet på den nye appen.
2. Appen er satt opp til å bruke amplitude. Trykk på appen logges som et "navigere"-event, hvor navnet på appen logges under "komponent". Default er at navnet som ble benyttet under steg 1 / erstatning av navn, blir satt som "komponent" i amplitude. 
3. Legg til appen i [nais/frontend-plattform](https://github.com/nais/frontend-plattform/blob/main/teams.tfvars).
4. Sett inn riktig team navn i nais.yaml og under cdn-upload i workflowen.
5. Kommenter inn upload-dev og upload-prod i workflowen.

Mikfrontenden blir lastet opp til nav sin CDN ved push til main og har et manifest som deployes til Nais.

# Kom i gang

1. Bygg tms-mikrofrontend-template ved å kjøre npm run build
2. Start appen lokalt ved å kjøre npm run dev
3. Appen nås på http://localhost:3000

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-personbruker.
