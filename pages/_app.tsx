import "../styles/globals.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@zvone123321/mylibrary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout
      background="#DAD9D9"
      color="black"
      items={[
        { label: "POČETNA", link: "/" },
        { label: "GALERIJA", link: "/Galerija" },
        { label: "KONTAKT", link: "/Kontakt" },
      ]}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
