import React from "react";
import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.jpg";
import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.png";
import customer3 from "../assets/customer3.png";
import customer4 from "../assets/customer4.png";
import { motion } from "framer-motion";

const containerVariants = {
  hiddden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Review = () => {
  const custsArr = [customer1, customer2, customer3, customer4];
  return (
    <section className="container mx-auto mb-8 mt-12" id="review">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <motion.p
          variants={itemVariants}
          className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]"
        >
          {REVIEW.content}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <img
            src={xaviour}
            alt={REVIEW.name}
            width={80}
            height={80}
            className="rounded-full border"
          />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>
      <div
        initial="hidden"
        whileInView="show"
        variants={itemVariants}
        viewport={{ once: true }}
        className="mt-40 flex flex-col items-center justify-center gap-2 lg:flex-row"
      >
        {custsArr.map((customer, index) => (
          <img
            key={index}
            src={customer}
            alt="customer"
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default Review;
