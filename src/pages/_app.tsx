import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { DefaultSeo, NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://mportfolio-nine.vercel.app/",
          site_name: "Minimal Portfolio",
          images: [
            {
              url: "https://mportfolio-nine.vercel.app/thumbnail.png",
              alt: "Minimal Portfolio",
              width: 842,
              height: 595,
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@rychillie",
          site: "@rychillie",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
