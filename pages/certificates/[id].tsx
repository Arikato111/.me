import CertificatesData from "@/Data/CertificatesData.json";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import ButtonContact from "@/components/ButtonContact";
import ArrowIcon from "@/components/icons/ArrowIcon";
import MenuDropdown from "@/components/MenuDropdown";
import MetaTag from "@/components/MetaTag";

type CerProps = {
  data: typeof CertificatesData[0];
};

export default function SingleCertificate({ data }: CerProps) {
  return (
    <>
      <Head>
        <MetaTag
          title={data.type + " Certifacate"}
          description={data.title}
          image={`https://nawasan.dev/cer/${data.img}`}
          url="https://nawasan.dev"
        />
        <title>{`${data.title} | ZocketZero`}</title>
      </Head>
      <main className="main">
        <div>
          <div className="inline-block cursor-pointer print:hidden">
            <Link href="/certificates">
              <ButtonContact Icon={ArrowIcon} title="back" />
            </Link>
          </div>
          <MenuDropdown link={data.link} />
        </div>
        <div className="text-center my-20 lg:my-0 print:m-0">
          <img
          width={900}
          height={500}
            id="certificate"
            title={data.title}
            className="w-full inline-block lg:w-7/12 shadow-lg shadow-gray-400 print:shadow-none print:w-screen"
            src={data.img.high}
            alt={data.title}
          />
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: any[] = [];
  CertificatesData.map((cer) => {
    paths.push({ params: { id: `${cer.id}` } });
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params ?? {};
  return {
    props: {
      data: CertificatesData[Number(id)],
    },
  };
};
