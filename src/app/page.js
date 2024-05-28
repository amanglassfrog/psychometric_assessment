import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-T1RMK1QQK9"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T1RMK1QQK9');
          `,
        }}
      ></script>
    </>
  );
}
