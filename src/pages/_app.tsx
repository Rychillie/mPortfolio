import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>Este é o Footer</footer>
    </>
  );
}

export default MyApp;
