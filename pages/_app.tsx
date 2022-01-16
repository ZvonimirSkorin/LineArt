import "../styles/globals.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@zvone123321/mylibrary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout
      background="#939090"
      color="white"
      items={[
        { label: "Početna", link: "/" },
        { label: "Galerija", link: "/Galerija" },
        { label: "Kontakt", link: "/Kontakt" },
      ]}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
