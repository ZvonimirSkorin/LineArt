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
      <section style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem", cursor: "pointer", maxWidth: 500 }}>
        <div
          style={{
            borderColor: "#635D5D ",
            backgroundColor: "#F87700  ",
            color: "white",
            width: "50%",
            fontSize: "1.4rem",
            textAlign: "center",
            padding: "0.4rem",
          }}
          onClick={() => {}}
        >
          Naruči
        </div>
        <div
          style={{
            cursor: "pointer",
            borderColor: "#635D5D ",
            backgroundColor: "#635D5D ",
            color: "white",
            width: "50%",
            fontSize: "1.4rem",
            textAlign: "center",
            padding: "0.4rem",
          }}
          onClick={() => {}}
        >
          Galerija
        </div>
      </section>
      <section className={styles.blur}></section>
    </section>
  );
};
