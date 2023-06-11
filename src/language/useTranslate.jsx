import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

const text = {
  microfrontendTitle: {
    nb: "Dette kommer til å bli en awesome mikrofrontend!",
    nn: "Dette kjem til å bli ein awesome mikrofrontend!",
    en: "This is going to be an amazing microfrontend!",
  },
};

export default function useTranslate(id) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
