import Image from "next/image";
import React from "react";
import PLink from "../PLink";
import styles from "../style";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
      className={`my-3 md:my-10 flex flex-col-reverse xl:flex-row items-center `}
    >
      <div className="relative flex mt-20 xl:mt-0  xl:min-w-[400px]">
        <Image
          src={"/aani/IMG-20220901-WA0529.jpg"}
          alt=""
          width={250}
          height={370}
          className="bottom-3 left-3 relative z-10"
        />
        <Image
          src={"/aani/IMG-20220901-WA0534.jpg"}
          alt=""
          width={250}
          height={370}
          className="top-3 right-3 hidden sm:block relative"
        />
      </div>
      <div className="ml-10">
        <h3 className={`  text-primary ${styles.heading3} mb-5`}>
        Aim and Objectives
        </h3>
        <p
          className={`font-normal  text-black ${styles.paragraph} max-w-5xl mb-8 `}
        >
To establish the means of contributing positively and objectively to national discourse on any issues affecting the development of Nigeria and proffer appropriate recommendations and implementation strategies to Government;
To serve as think-tank to the Federal, State and Local Governments of Nigeria on all matters of national development.
        </p>
        <PLink
          text="Learn More"
          href="about-us"
          styles="bg-primary text-white p-4"
        />
      </div>
    </motion.div>
  );
};

export default AboutUs;
