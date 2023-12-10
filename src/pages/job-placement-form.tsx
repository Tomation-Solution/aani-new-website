import { Herofn, Layout, styles } from "@/components";
import PlacementForm from "@/components/PlacementForm";
import Head from "next/head";
import React from "react";

const JobPlacement = () => {
  return (
    <>
      <Head>
        <title>AANI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <Herofn
            img={"allinsuit"}
            title={
              "Promoting the practice of Business Process Management in Nigeria"
            }
          />
          <div className={styles.paddingX}>
            <PlacementForm />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default JobPlacement;
