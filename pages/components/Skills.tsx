import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute
        dark:bg-light dark:text-dark
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
        xs:text-dark xs:dark:text-light xs:font-bold "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 2 } }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2
        className=" font-bold text-8xl mt-64 w-full text-center 
      md:text-6xl md:mt-32"
      >
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full
       bg-circularLigth dark:bg-circularLigth2 
       lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
       lg:bg-circularLigthLg lg:dark:bg-circularLigth2Lg
       md:bg-circularLigthMd md:dark:bg-circularLigth2Md
       sm:bg-circularLigthSm sm:dark:bg-circularLigth2Sm 
       "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer
        dark:bg-light dark:text-dark
        lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill name="CSS" x={"2vw"} y={"-8vw"} />
        <Skill name="JavaScript" x={"-13vw"} y={"4vw"} />
        <Skill name="HTML" x={"13vw"} y={"4vw"} />
        <Skill name="TypeScript" x={"-19vw"} y={"-7vw"} />
        <Skill name="Next.js" x={"2vw"} y={"12vw"} />
        <Skill name="React.js" x={"18vw"} y={"-8vw"} />
        <Skill name="Tailwind CSS" x={"1vw"} y={"-13vw"} />
      </div>
    </>
  );
};

export default Skills;
