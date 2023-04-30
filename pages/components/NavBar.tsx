import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GitHubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href = "", title = "", className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      dark:bg-light
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMovileLink = ({
  href = "",
  title = "",
  className = "",
  toggle = () => {},
}) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      className={`${className} relative group text-light dark:text-dark
      mt-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[2px] inline-block w-0 bg-light  absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      dark:bg-dark
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setModes] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px12 sm:px-8"
    >
      <button
        className="flex-col justify-center items-center hidden xl:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm
          transition-all duration-300 ease-out 
        ${isOpen ? " rotate-45 translate-y-1" : " -translate-y-0.5"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5
          transition-all duration-100 ease-out 
          ${isOpen ? " opacity-0" : " opacity-100"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm
          transition-all duration-300 ease-out 
        ${isOpen ? " -rotate-45 -translate-y-1" : " translate-y-0.5"}`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4"></CustomLink>
          <CustomLink href="/about" title="About" className="mx-4"></CustomLink>
          <CustomLink
            href="/projects"
            title="Projects"
            className="mx-4"
          ></CustomLink>
          <CustomLink
            href="/articles"
            title="Articles"
            className="ml-4"
          ></CustomLink>
        </nav>
        <nav className="flex  items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/saogeks"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/ReneOsvaldoCamachoFernandez"
            target="_blank"
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            className="w-7 mx-3"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rene-camacho-fernandez-camacho/"
            target="_blank"
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            className="w-6 ml-3"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() => setModes(mode === "light" ? "dark" : "light")}
            className={`ml-6 flex items-center justify-center rounded-full p-1
          ${
            mode === "light"
              ? " bg-dark text-light"
              : "bg-light text-dark animate-pulse"
          }`}
          >
            {mode === "dark" ? (
              <MoonIcon className={"animate-pulse rounded-full  "} />
            ) : (
              <SunIcon className={"animate-spin-slow fill-light"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center 
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMovileLink
              href="/"
              title="Home"
              className=" "
              toggle={handleClick}
            ></CustomMovileLink>
            <CustomMovileLink
              href="/about"
              title="About"
              className=" "
              toggle={handleClick}
            ></CustomMovileLink>
            <CustomMovileLink
              href="/projects"
              title="Projects"
              className=" "
              toggle={handleClick}
            ></CustomMovileLink>
            <CustomMovileLink
              href="/articles"
              title="Articles"
              className=" "
              toggle={handleClick}
            ></CustomMovileLink>
          </nav>
          <nav className="flex  items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com/saogeks"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-7 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/ReneOsvaldoCamachoFernandez"
              target="_blank"
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              className="w-7 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
            >
              <GitHubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rene-camacho-fernandez-camacho/"
              target="_blank"
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <button
              onClick={() => setModes(mode === "light" ? "dark" : "light")}
              className={`ml-6 flex items-center justify-center rounded-full p-1
          ${
            mode === "light"
              ? " bg-dark text-light"
              : "bg-light text-dark animate-pulse"
          }`}
            >
              {mode === "dark" ? (
                <MoonIcon className={"animate-pulse rounded-full sm:mx-1 "} />
              ) : (
                <SunIcon className={"animate-spin-slow fill-light sm:mx-1"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
