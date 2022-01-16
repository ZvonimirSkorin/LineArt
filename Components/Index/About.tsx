import styles from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCoffee } from "@fortawesome/free-solid-svg-icons";

export const IndexAbout: React.FC = () => {
  return (
    <section className={styles.IndexAbout}>
      <h1 className={styles.H1}>MINI LINE ART</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac risus vitae ex pretium sollicitudin quis sed ex. Maecenas non iaculis metus.
        Phasellus ac imperdiet ligula. Sed a purus nulla. Aenean rhoncus non nunc quis ultricies. Suspendisse a venenatis sapien. Curabitur in metus
        sit amet neque sodales sagittis vitae vel mi. Ut venenatis tempus felis id tincidunt. Morbi lorem est, rutrum vitae mi id, vehicula consequat
        metus. Suspendisse varius, quam at mattis maximus, odio libero venenatis felis, ut dapibus diam odio quis lectus. Donec maximus felis id odio
        ultricies, eget convallis lorem consequat.
      </p>
      <section style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div className="buttonFill reverse" onClick={() => {}}>
          Naruči <FontAwesomeIcon width="16" icon={faChevronRight} />
          <div className="hiddenWave"></div>
        </div>
        <div style={{ borderColor: "#635D5D ", color: "#635D5D " }} className="buttonFill reverse" onClick={() => {}}>
          Galerija <FontAwesomeIcon width="16" icon={faChevronRight} />
          <div style={{ backgroundColor: "#635D5D " }} className="hiddenWave"></div>
        </div>
      </section>
      <section className={styles.blur}></section>
    </section>
  );
};
