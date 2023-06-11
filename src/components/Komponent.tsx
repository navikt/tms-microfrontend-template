import React from "react";
import { Panel } from "@navikt/ds-react";
import "./Komponent.css";

interface Props {
  tekst: string;
  emoji: string;
}

const Komponent = ({ tekst, emoji }: Props) => {
  return (
    <div className="komponent">
      <Panel border>
        <p>{tekst}</p>
        <p>{emoji}</p>
      </Panel>
    </div>
  );
};

export default Komponent;
