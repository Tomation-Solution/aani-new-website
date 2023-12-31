import Head from "next/head";
import { Hero, Layout } from "@/components";
import { Interestedfn } from "@/components/landing-page";
import Service from "@/components/services";
import { useRouter } from "next/router";

export default function Events() {

  return (
    <>
      <Head>
        <title>BPMI | Services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <Hero img={"gallery (2)"} title={"Services"} />
          <Service />
          <Interestedfn />
        </Layout>
      </main>
    </>
  );
}
