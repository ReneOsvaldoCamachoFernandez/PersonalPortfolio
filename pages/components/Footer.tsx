import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg 
    dark:text-light dark:border-light
    sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()}&copy; All Rigths Reserved.</span>
        <div
          className="flex items-center 
        lg:py-2"
        >
          Build By&nbsp;
          <Link
            href="https://www.linkedin.com/in/rene-camacho-fernandez-camacho/"
            target="_blank"
            className="underline underline-offset-2 hover:text-primary hover:dark:text-primaryDark"
          >
            Rene Camacho
          </Link>
        </div>
        <Link
          href={"mailto:saogeks@gmail.com"}
          target="_blank"
          className="underline underline-offset-2 hover:text-primary hover:dark:text-primaryDark"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
