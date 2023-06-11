import { useContext } from "react";
import { LanguageContext, Language } from "./LanguageProvider";

type Text = {
  [key: string]: { [key in Language]: string };
};

const text: Text = {
  microfrontendTitle: {
    nb: "Dette kommer til å bli en awesome mikrofrontend!",
    nn: "Dette kjem til å bli ein awesome mikrofrontend!",
    en: "This is going to be an amazing microfrontend!",
  },
};

export default function useTranslate(id: string) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
