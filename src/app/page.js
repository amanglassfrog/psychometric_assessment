import Header from "@/components/Header/Header";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Glassfrog Academy</title>
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-T1RMK1QQK9"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T1RMK1QQK9');
        `}
      </Script>
      <Header />
    </>
  );
}
