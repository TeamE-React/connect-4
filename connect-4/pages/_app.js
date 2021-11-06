import AppContextProvider from "../contexts/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;

// By wrapping it like this, we could access the value inside of the Context object (AppContext.js) in every component and page.
