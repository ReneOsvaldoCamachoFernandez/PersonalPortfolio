import Head from "next/head";
import React from "react";
import Layout from "./components/Layout";
import AnimatedText from "./components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon } from "./components/Icons";
import project1 from "/public/images/projects/photography-portfolio-project-image.png";
import project2 from "/public/images/projects/Result-Summary-Component.png";
import project3 from "/public/images/projects/Product-Preview-Card-Component.png";
import project4 from "/public/images/projects/interactive-rating-comp-frontend-mentor.png";
import project5 from "/public/images/projects/Intro-with-signup-form.png";
import project6 from "/public/images/projects/QR-code-component.png";
import TransitionEffect from "./components/TransitionEffect";

const FeaturedProject = ({
  type = "",
  title = "",
  summary = "",
  img,
  link = "",
  github = "",
}: {
  type: string;
  img: any;
  summary: string;
  title: string;
  link: string;
  github: string;
}) => (
  <article
    className="w-full flex items-center justify-between relative rounded-br-2xl
  rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
  dark:bg-dark dark:border-light 
  lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl"
  >
    <div
      className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
    rounded-br-3xl 
    dark:bg-light
     xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]
    "
    />

    <Link
      href={link}
      target="_blank"
      className="w-1/2 cursor-pointer overflow-hidden rounded-lg 
      lg:w-full"
    >
      <Image
        src={img}
        alt={title}
        className="w-full h-auto"
        priority={true}
        sizes="(max-width: 768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
      ></Image>
    </Link>
    <div
      className="w-1/2 flex flex-col items-start justify-between pl-6 
    lg:w-full lg:pl-0 lg:pt-6"
    >
      <span
        className="text-primary font-medium text-xl
      dark:text-primaryDark 
      xs:text-base"
      >
        {type}
      </span>
      <Link
        href={link}
        target="_blank"
        className="hover:underline underline-offset-2 
        dark:text-light"
      >
        <h2
          className="my-2 w-full text-left text-4xl font-bold
        xs:text-sm
        "
        >
          {title}
        </h2>
      </Link>
      <p
        className="my-2 font-medium text-dark 
      dark:text-light
      sm:text-sm
      "
      >
        {summary}
      </p>
      <div className="mt-2 flex items-center  ">
        <Link href={github} target="_blank" className="w-10">
          <GitHubIcon className="" />
        </Link>
        <Link
          href={link}
          target="_blank"
          className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
          dark:bg-light dark:text-dark
          sm:px-4 sm:text-base
          "
        >
          Visit Project
        </Link>
      </div>
    </div>
  </article>
);

const Project = ({
  type = "",
  title = "",
  summary = "",
  img,
  link = "",
  github = "",
}: {
  type: string;
  img: any;
  summary: string;
  title: string;
  link: string;
  github: string;
}) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative
    dark:bg-dark dark:border-light
    xs:p-4"
    >
      <div
        className=" absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark
    rounded-br-3xl 
    md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
        ></Image>
        {}
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary font-medium text-xl 
        lg:text-lg md:text-base
        "
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl  font-bold
          lg:text-2xl "
          >
            {title}
          </h2>
        </Link>
        <p
          className="my-2 font-medium text-dark 
        dark:text-light"
        >
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-around ">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark 
            md:text-base"
          >
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            className="w-8 
          md:w-6"
          >
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>ReneC | Projects Page</title>
        <meta name="description" content="complete" />
      </Head>
      <TransitionEffect />

      <main
        className="w-full mb-16 flex flex-col items-center justify-center 
      dark:text-light"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-32 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl"
          />
          <div
            className="grid grid-cols-12 gap-24 gap-y-32 
          xl:gap-x-16 lg:gap-x-8 md:gap-y 24 sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                title="Photography Portfolio"
                summary="This photography portfolio project allowed me to delve into front-end technologies such as Next.js, Tailwind CSS, and more. With their help, I was able to create a visually appealing and highly responsive portfolio that has impressed my clients. The experience also helped me enhance my skills in web design, SEO, and digital marketing"
                link="https://photo-portfolio-jga2gfib0-reneosvaldocamachofernandez.vercel.app/"
                type="Featured Project"
                img={project1}
                github="https://github.com/ReneOsvaldoCamachoFernandez/photo-portfolio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Result Summary Component"
                summary="Result Summary Component, made responsive, with Next.js, React.js, Tailwind CSS, TypeScript, and more front-end technologies"
                link="https://results-summary-frontend-mentor.vercel.app/"
                type="Project"
                img={project2}
                github="https://github.com/ReneOsvaldoCamachoFernandez/results-summary-frontend-mentor"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Product Preview Card Component"
                summary="Product preview card component responsive for movil, tablet and desktop using React, Next.js, Tailwind CSS and TypeScript."
                link="https://product-preview-card-component-rene.vercel.app/"
                type="Project"
                img={project3}
                github="https://github.com/ReneOsvaldoCamachoFernandez/product-preview-card-component"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Interactive Rating Component"
                summary="An Interactive Rating Component, responsive for movil, tablet and desktop using React, Next.js, Tailwind CSS and TypeScript."
                link="https://interactive-rating-comp-frontend-mentor.vercel.app/"
                type="Featured Project"
                img={project4}
                github="https://github.com/ReneOsvaldoCamachoFernandez/interactive-rating-comp-frontend-mentor"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Intro with signup form"
                summary="Intro component with signup form, responsive for movil, tablet and desktop using React, Next.js, Tailwind CSS and TypeScript."
                link="https://intro-component-with-signup-form-lake.vercel.app/"
                type="Project"
                img={project5}
                github="https://github.com/ReneOsvaldoCamachoFernandez/intro-component-with-signup-form"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="QR-code component"
                summary="QR-code component, responsive for movil, tablet and desktop using React, Next.js, Tailwind CSS and TypeScript."
                link="https://qr-code-component-puce-six.vercel.app/"
                type="Project"
                img={project6}
                github="https://github.com/ReneOsvaldoCamachoFernandez/qr-code-component"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
