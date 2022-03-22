import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Accordion = ({ question, answer }) => {
  const [show, setShow] = React.useState(false);

  const variants = {
    hidden: { height: 0 },
    visible: { height: "auto" },
    initialp: { opacity: 0 },
    p: { opacity: 1 },
  };

  return (
    <div>
      <div
        className={` ${
          show
            ? "rounded-tl-2xl rounded-tr-2xl border border-opacity-20"
            : "rounded-2xl "
        }  bg-white border-lightTertiary py-4 shadow flex justify-between cursor-pointer md:cursor-default	 `}
        onClick={() => setShow(!show)}
      >
        <p className="text-lightPrimary text-xl px-6">{question}</p>
        {!show && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  mr-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
        {show && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  mr-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        )}
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit={{ height: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            variants={variants}
            className="bg-lightSecondary rounded-bl-2xl rounded-br-2xl"
          >
            <motion.p
              initial="initialp"
              animate="p"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              variants={variants}
              className="px-10 py-3 text-base text-lightTertiary leading-9 transition-all"
              onClick={() => setShow(!show)}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
