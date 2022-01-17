import type { NextPage } from "next";
import Head from "next/head";
import { IndexAbout } from "../Components/Index/About";
import { ContactCard } from "../Components/Kontakt/ContactCard";
import { Peaky } from "../Components/PeakyBlinders";
import styles from "../styles/Home.module.css";
import kontStyles from "../styles/Kontakt.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kontakt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ justifyContent: "flex-start" }} className={`${styles.main} `}>
        <section className={kontStyles.wrapper}>
          <ContactCard>
            <div>
              <strong>Nazovite na broj: </strong>
            </div>
            <div style={{ margin: "2rem 0rem" }}>
              <a style={{ color: "#F87700", borderStyle: "none", textDecoration: "none", fontSize: "1.3rem", fontWeight: 700 }} href="tel:0984904885">
                098 4904-885
              </a>
            </div>
          </ContactCard>
          <ContactCard>
            <div>
              <strong>Pošaljite e-mail na: </strong>
            </div>
            <div style={{ margin: "2rem 0rem" }}>
              <a
                style={{ color: "#F87700", borderStyle: "none", textDecoration: "none", fontSize: "1.3rem", fontWeight: 700 }}
                href="mailto:mini.oneline.art@gmail.com"
              >
                mini.oneline.art@gmail.com
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <section>
                <strong style={{ fontSize: "1.3rem" }}>VAŽNO!</strong>
              </section>
              <section>Molim vas da u e-mail poruci napišete sljedeće informacije:</section>
              <ol>
                <li>Veličinu papira odabranog crteža</li>
                <li>Fotografiju ili više fotografija koje želite pretvoriti u crtež jedne linije</li>
                <li>Adresu na koju želite isporučenu pošiljku</li>
              </ol>

              <p>Zahvaljujem unaprijed na danim informacijama!!</p>
            </div>
          </ContactCard>
          <ContactCard>
            <div style={{ textAlign: "center" }}>
              Posjetite i instagram profil{" "}
              <a
                style={{ color: "#F87700", borderStyle: "none", textDecoration: "none", fontSize: "1.3rem", fontWeight: 700 }}
                href="https://www.instagram.com/mini_line_art/"
              >
                mini.line.art
              </a>
              , gdje možete poslati poruku u DM ako želite naručiti crtež.
            </div>
          </ContactCard>
        </section>
      </main>
    </div>
  );
};

export default Home;
