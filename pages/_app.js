import "../assets/styles/globals.scss";
import { createContext } from "react";
import Layout from "../components/layout/layout.jsx";
export const GlobalContext = createContext({});
function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <GlobalContext.Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
