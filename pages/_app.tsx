import "@/styles/globals.css";
import "@/styles/App.css";
import "@/public/sakura.css";
import Script from "next/script";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import YoutubeSong from "@/components/YoutubeSong";
import { checkTheme } from "@/components/CheckMode";
import ToggleMode from "@/components/ToggleMode";
import CertificateData from "../Data/CertificatesData.json";
// import { decryptText as dt } from "../components/lib";

export default function App({ Component, pageProps }: AppProps) {
  const [isFlowerFall, setIsFlowerFall] = useState(false);
  // const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  const AppComponent = Component as any;

  useEffect(() => {
    if (CertificateData[0].id == 0) {
      CertificateData.reverse();
    }
  }, []);

  useEffect(() => {
    checkTheme();
    // let link =
    //   "iuuqt;00xxx/bozujpo/dpn0x" +
    //   "q.dpoufou0vqmpbet03134016" +
    //   "025:bge7427:4d9:6g92f619f" +
    //   "c6bbfg48/nq4";
    // setAudio(new Audio(dt(link)));
    setIsMobile(!!window.navigator.userAgent.match(/Mobile/));
  }, []);

  const changeFlowerFall = () => {
    setIsFlowerFall(!isFlowerFall);
    // if (isMobile) {
    //   if (isFlowerFall) audio?.pause();
    //   else audio?.play();
    // }
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" sizes="32x32" href="/favicon.ico" type="image/x-icon" />
        <link rel="alternate icon" sizes="any" href="/icons/Na.svg" type="image/svg+xml" />
      </Head>
      <noscript>
        <meta httpEquiv="refresh" content="2; URL=https://html.nawasan.dev" />
        <div
          style={{ textAlign: "center", position: "fixed", width: "100%", height: "100vh", backgroundColor: "white" }}>
          <h1 className='md:text-6xl text-center'>redirect to no script page</h1>
        </div>
      </noscript>

      {/* <ToggleMode /> */}
      {isFlowerFall && !isMobile && <YoutubeSong />}
      <AppComponent
        {...pageProps}
        isFlowerFall={isFlowerFall}
        changeFlowerFall={changeFlowerFall}
      />
      <Script src="/sakura.js" />
    </>
  );
}
