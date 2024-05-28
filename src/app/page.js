import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-T1RMK1QQK9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T1RMK1QQK9');
</script>
    </head>
    <Header />
    </>
  );
}
