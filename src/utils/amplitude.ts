import { getAmplitudeInstance } from "@navikt/nav-dekoratoren-moduler";

const logger = getAmplitudeInstance("dekoratoren");

//TODO: komponent må fylles ut med et identifiserende navn for microfrontend
//Default er at navnet på appen blir benyttet ved replace av "tms-microfrontend-template"
export const logNavigereEvent = () => logger("navigere", { komponent: "tms-microfrontend-template" });
