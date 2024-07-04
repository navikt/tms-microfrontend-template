import { Panel } from "@navikt/ds-react";
import styles from "./Komponent.module.css";

interface Props {
  tekst: string;
}

const Komponent = ({ tekst }: Props) => {
  return (
    <div className={styles.komponent}>
      <Panel border>
        <p>{tekst} 😊🎉</p>
      </Panel>
    </div>
  );
};

export default Komponent;
