import { useQuery } from "react-query";
import { fetcher } from "./api/api";
import { apiUrl } from "./api/urls";
import Komponent from "./components/Komponent";
import "@navikt/ds-css";

function App() {
  const { data } = useQuery(apiUrl, fetcher);

  return <Komponent tekst={data?.tekst} />;
}

export default App;
