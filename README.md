# tms-microfrontend-template

Kan brukes som utgangspunkt for å opprette nye microfrontends i Min Side.

# Tilpass repoet

1. Søk etter og erstatt tms-microfrontend-template med navnet på den nye appen.
2. Legg til appen i [nais/frontend-plattform](https://github.com/nais/frontend-plattform/blob/main/teams.tfvars) (hvis teamet ikke er registrert så kan du gjøre det [sånn](https://github.com/nais/frontend-plattform/tree/main?tab=readme-ov-file#registrere-team-i-cdn)).
3. Sett inn riktig team navn under cdn-upload i workflowen.
4. Kommenter inn cdn-upload, upload-dev og upload-prod i workflowen.
5. Ta kontakt med oss på slack i #minside-microfrontends for å få tilgang til å trigge workflowen.

Micfrontenden blir lastet opp til NAV sin CDN ved push til main.

# Kom i gang

1. Bygg tms-microfrontend-template ved å kjøre npm run build
2. Start appen lokalt ved å kjøre npm run dev
3. Appen nås på http://localhost:3000

# Amplitude

Appen er satt opp til å bruke amplitude. Trykk på appen logges som et "navigere"-event.

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-personbruker.
