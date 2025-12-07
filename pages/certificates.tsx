import Link from "next/link";
import ButtonContact from "@/components/ButtonContact";
import ArrowIcon from "@/components/icons/ArrowIcon";
import CertificateData from "../Data/CertificatesData.json";
import CertificateShow from "@/components/CertificateShow";
import Head from "next/head";
import {DefaultMetaTag} from "@/components/MetaTag";

export default function Certificates() {
  
  return (
    <>
      <Head>
        <DefaultMetaTag />
       <title>Certificates | ZocketZero</title>
      </Head>
      <main className="main">
        <div className="inline-block">
          <Link href="/">
            <ButtonContact Icon={ArrowIcon} title="back" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-center">
          {CertificateData.map((Cer, idx) => (
            <div key={idx}>
              <div>
                <Link href={`/certificates/${Cer.id}`}>
                  <CertificateShow
                    src={Cer.img.low}
                    alt={Cer.title}
                    type={Cer.type}
                  />
                </Link>
              </div>
              <img width={300} height={200} className="hidden" src={Cer.img.high} alt="" />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
