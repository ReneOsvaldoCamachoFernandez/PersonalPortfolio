import Head from "next/head";
import React from "react";
import Layout from "./components/Layout";
import AnimatedText from "./components/AnimatedText";
import TransitionEffect from "./components/TransitionEffect";

const articles = () => {
  return (
    <>
      <Head>
        <title>ReneC | Projects Page</title>
        <meta name="description" content="complete" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex items-center justify-center ">
        <Layout className="pt-16">
          <AnimatedText
            text="Nothing to show yet!"
            className="mb-32 sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
        </Layout>
      </main>
    </>
  );
};

export default articles;
