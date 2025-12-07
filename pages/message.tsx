import Head from "next/head";
import { DefaultMetaTag } from "@/components/MetaTag";
import React from "react";
import Link from "next/link";
import ArrowIcon from "@/components/icons/ArrowIcon";
import { decryptText } from "@/components/lib";

type MessageProps = { isFlowerFall: boolean };

function ButtonBack() {
  return <Link href="/">
    <div
      className={`bg-pink-300 dark:bg-slate-900 hover:scale-100
                   hover:bg-pink-300/90 
          hover:shadow-pink-100 border-pink-100 duration-300
           text-white dark:text-slate-200
          fill-white  dark:fill-slate-200 flex justify-center 
            items-center rounded-lg border-2 py-1 px-3 font-medium
          dark:border-slate-200 dark:hover:bg-gray-700 m-1 
            shadow-md hover:shadow-lg dark:hover:shadow-gray-700 shadow-gray-300 dark:shadow-none`}
    >
      <span className="inline-block w-8 mx-1">
        <ArrowIcon />
      </span>
      <span>back</span>
    </div>
  </Link>

}

export default function Novel({ isFlowerFall }: MessageProps) {
  console.log(isFlowerFall);
  const message =
    "Xibu!jg!po!uif!34se!pg!Opwfncfs!3128!J!ibwf!xbudi!uibu!npwjf@!Xjmm!bmm!pg!uijt!dibohf@!Xjmm!uif!qbui!J!dipptf!tujmm!uif!tbnf@!Xjmm!J!tujmm!cf!xip!J!bn@!Xjmm!uif!jnqpsubou!uijoht!tujmm!fyjtu@!Xjmm!J!tujmm!gffm!tbe!bcpvu!uibu!tpoh@!Xjmm!uibu!tupsz!tujmm!nfbo!up!nf@!Xjmm!J!tujmm!cf!bcmf!up!nffu!uibu!qfstpo!ps!opu@";

  if (isFlowerFall)
    return (
      <>
        <Head>
          <DefaultMetaTag />
          <title>Message | ZocketZero</title>
        </Head>
        <main className="main bg-yellow-100/40 dark:bg-black">
          <div className="inline-block">
            <ButtonBack />
          </div>

          <div className="pt-10 p-3">
            <pre className="use-font text-emerald-500 whitespace-pre-wrap px-5 sm:px-20 sm:text-lg dark:text-slate-200">
              {"\t"}
              {decryptText(message)
                .split(" ")
                .map((chr, idx) => (
                  <span
                    className="hover:-translate-y-1 hover:scale-105 text-3xl duration-1000 inline-block cursor-pointer"
                    key={idx}
                  >
                    {chr + " "}
                  </span>
                ))}
            </pre>
          </div>
        </main>
      </>
    );
  else
    return (
      <>
        <Head>
          <DefaultMetaTag />
          <title>Message | ZocketZero</title>
        </Head>
        <main className="main bg-yellow-100/40 dark:bg-black">
          <div className="inline-block">
            <ButtonBack />
          </div>

          <div className="pt-10 p-3">
            <pre className="text-emerald-500 whitespace-pre-wrap px-5 sm:px-20 sm:text-lg dark:text-slate-200">
              It&apos;s nothing..
            </pre>
          </div>
        </main>
      </>
    );
}
