import App from "./App";
import { LanguageProvider } from "./language/LanguageProvider";

const Mikrofrontend = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

export default Mikrofrontend;
