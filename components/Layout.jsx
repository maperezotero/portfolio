import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Mapo Portfolio"}</title>
        <meta name="author" content="Miguel Ángel Pérez Otero" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
