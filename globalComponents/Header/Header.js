import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [nav, setNav] = React.useState(false);

  return (
    <>
      <div className="w-full bg-lightSecondary py-4 px-5 sticky top-0 left-0 z-20">
        <div className="max-w-7xl m-auto flex items-center justify-between">
          <div className="bg-lightPrimary p-3 rounded-md">
            <h2 className="text-2xl text-lightTertiary font-bold">
              <Link href="/">
                <a>DB support</a>
              </Link>
            </h2>
          </div>
          <div>
            <ul className="flex space-x-8 text-lg md:hidden text-lightTertiary">
              <li>About</li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 hidden cursor-pointer md:block md:cursor-default"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setNav(!nav)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white w-full h-screen m-auto fixed z-20 top-0 py-6 flex-col items-end px-7 text-center hidden md:flex "
          >
            <motion.div
              className="max-w-max mt-2"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: "100%", x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setNav(!nav)}
                className="h-8 w-8 hidden cursor-pointer  md:block md:cursor-default"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: "100%", x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="flex flex-col w-full justify-center space-y-9 mt-60 text-lg text-lightTertiary "
            >
              <li>
                <Link href="/">
                  <a className="text-2xl text-lightTertiary font-medium  ">
                    <div
                      className="cursor-pointer py-3 border shadow-md border-lightTertiary border-opacity-10 rounded-xl hover:bg-lightSecondary active:bg-lightSecondary"
                      onClick={() => setNav(false)}
                    >
                      About
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-2xl text-lightTertiary font-medium ">
                    <div
                      className="cursor-pointer py-3 border shadow-md border-lightTertiary border-opacity-10 rounded-xl hover:bg-lightSecondary active:bg-lightSecondary"
                      onClick={() => setNav(false)}
                    >
                      Contact
                    </div>
                  </a>
                </Link>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
