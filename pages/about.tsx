import Link from "next/link";
import React, { useEffect, useRef } from "react";
import AnimatedText from "./components/AnimatedText";
import Layout from "./components/Layout";
import Image from "next/image";
import ProfilePic from "../../app/public/images/ProfilePic.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Head from "next/head";
import TransitionEffect from "./components/TransitionEffect";

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{}</span>;
};

const about = () => (
  <>
    <Head>
      <title>ReneC | About Page</title>
      <meta name="description" content="complete" />
    </Head>
    <TransitionEffect />

    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className={"pt-16"}>
        <AnimatedText
          text="Passion Fuels Purpose!"
          className="mb-16 
          lg:!text-7xl sm:!text-6xl sm:mb-8 xs:text-4xl "
        />
        <div
          className="grid w-full grid-cols-8 gap-16 
        sm:gap-8"
        >
          <div
            className="col-span-3 flex flex-col items-start justify-center
          xl:col-span-4 md:order-2 md:col-span-8
          "
          >
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              Biography
            </h2>
            <p className="font-medium ">
              Hello! I&apos;m ReneC, a web developer with a passion for crafting
              beautiful, functional, and user-centered digital experiences. With
              years of experience in the field, I&apos;m always looking for new
              and innovative ways to bring my clients&apos; visions to life. I
              believe that design is about more than just aesthetics - it&apos;s
              about solving problems and creating intuitive, enjoyable
              experiences for users.
            </p>
            <p className="my-4 font-medium ">
              Whether I&apos;m working on a website, mobile app, or other
              digital product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I&apos;m
              dedicated to creating digital experiences that not only look great
              but also perform well in search engine rankings. That&apos;s why I
              make sure to incorporate relevant keywords into my designs to help
              boost your website&apos;s visibility and attract more potential
              customers.
            </p>
            <p className="font-medium ">
              I look forward to the opportunity to bring my skills and passion
              to your next project. If you&apos;re interested in working
              together, please don&apos;t hesitate to contact me. Let&apos;s
              create something great together!
            </p>
          </div>
          <div
            className="col-span-3 flex flex-col items-center justify-center
          xl:col-span-4 md:order-1 md:col-span-8
          "
          >
            <div
              className=" relative h-max rounded-2xl 
          border-2 border-solid border-dark bg-light p-8
          dark:bg-dark dark:border-light
          "
            >
              <div
                className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark dark:bg-light
              "
              />
              <Image
                src={ProfilePic}
                alt="ReneC"
                className="w-full h-auto rounded-2xl bg-black"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width:1200px) 50vw,
                30vw"
              ></Image>
            </div>
          </div>

          <div
            className="col-span-2 flex flex-col items-end justify-between 
          xl:col-span-8 xl:flex-row xl:items-center md:order-3"
          >
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={3} />+
              </span>
              <h2
                className="text-lg font-medium capitalize text-dark/75 dark:text-light/75 
              xl:text-center md:text-lg sm:text-base xl:text-sm"
              >
                satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={5} />+
              </span>
              <h2
                className="text-lg font-medium capitalize text-dark/75 dark:text-light/75 
              xl:text-center md:text-lg sm:text-base xl:text-sm"
              >
                projects completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={3} />+
              </span>
              <h2
                className="text-lg font-medium capitalize text-dark/75 dark:text-light/75 
              xl:text-center md:text-lg sm:text-base xl:text-sm"
              >
                years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  </>
);

export default about;
