import React, { use, useRef } from "react";
import { useScroll, motion, spring } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position = "",
  company = "",
  companyLink = "",
  time = "",
  address = "",
  work = "",
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between 
      md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: spring }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span
          className="capitalize font-medium text-dark/75
          dark:text-light/75 
          xs:text-sm
        "
        >
          {time} | {address}
        </span>
        <p
          className="font-medium w-full 
        md:text-sm"
        >
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center 
      md:text-6xl md:mb-16 xs:text-4xl"
      >
        Experience
      </h2>
      <div
        className="w-[75%] mx-auto relative
      lg:w-[90%] md:w-full"
        ref={ref}
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Informatic"
            company="Statistics & Data Corporation (SDC)"
            companyLink="http://www.onei.gob.cu"
            time="September 2019 - October 2022"
            address="Hermanos Caleros, Cab, SS, CU"
            work="During my time working as an IT professional in a statistics and information organization, I gained valuable skills and experience in data management, analysis, and visualization. I also developed my problem-solving and communication skills, working with colleagues and clients to troubleshoot issues and provide effective solutions."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
