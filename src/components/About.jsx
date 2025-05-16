import about from "../assets/about.png";
import React from "react";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container mx-auto mb-8" id="about">
      <h2 className=" mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Quiénes somos?
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full p-4 lg:w-1/2 flex justify-center items-center">
          <img src={about} alt="aboutImage" className="rounded-3xl" />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-4xl tracking-tighter lg:text-6xl"
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.4 }}
            className="mb-8 mt-1 h-2 w-36 bg-rose-300"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.6 }}
            className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl text-justify"
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
