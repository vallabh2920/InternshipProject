import React from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import BasePage from "../../layout/BasePage";

const Reachouttous = ({ userId }) => {
  const [popup, setPopup] = React.useState(false);
  const [error, setError] = React.useState("");

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const SendMail = async (e) => {
    e.preventDefault();
    try {
      const emailres = await emailjs.sendForm(
        "gmail",
        "contactTemplate",
        e.target,
        userId
      );
      setError("");
      await e.target.reset();
      await setPopup(true);
      await setTimeout(() => {
        setPopup(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  const info = [
    {
      id: 1,
      name: "Address:",
      image: "./img/mail-2.svg",
      messge: "45/b, Plot 73, Welfare Chambers, Sec-17, Vashi, Navi Mumbai",
    },
    {
      id: 2,
      name: "Contact:",
      image: "./img/phone.svg",
      messge: "0000 000 000",
    },
    {
      id: 3,
      name: "Email:",
      image: "./img/mail-1.svg",
      messge: "contact@gmail.com",
    },
  ];
  return (
    <BasePage>
      <div className="py-8 ">
        <h2 className="text-center text-lightTertiary text-3xl font-bold">
          Reach out to us
        </h2>
        <div className="flex flex-wrap justify-evenly lg:justify-center h-full w-full mb-24 drop-shadow-md ">
          <div className="mt-14 space-y-11">
            {info.map((item) => {
              return (
                <div
                  className="bg-lightSecondary w-heroText md:w-full rounded-xl p-8 space-y-4 "
                  key={item.id}
                >
                  <h2 className="text-center text-blackTertiary text-xl">
                    {item.name}
                  </h2>
                  <div className="flex justify-center items-center space-x-4">
                    <img className="" src={item.image} alt={item.name} />
                    <p>{item.messge}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className="mt-14 bg-lightSecondary h-auto w-full  rounded-xl py-8 px-12 space-y-4 text-lightTertiary max-w-lg drop-shadow-md"
            onSubmit={(e) => SendMail(e)}
          >
            <p className="animate-pulse text-lightPrimary">{error}</p>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border w-full bg-white border-lightTertiary border-opacity-10 "
            />

            <input
              type="text"
              placeholder="Mail id "
              name="mail"
              className="w-full border bg-white border-lightTertiary border-opacity-10"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="border w-full bg-white border-lightTertiary border-opacity-10"
            />

            <textarea
              placeholder="message"
              name="message"
              required
              className="h-48 w-full resize-none border bg-white border-lightTertiary border-opacity-10"
            />

            <input
              type="submit"
              className=" bg-white w-full py-3 border cursor-pointer font-medium border-lightTertiary border-opacity-10 rounded-lg "
            />
          </form>
        </div>

        {popup && (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 0.7 }}
            variants={variants}
            className="fixed h-screen top-0 w-full m-auto left-0 flex justify-center items-center backdrop-blur-sm p-10	"
          >
            <div className="w-full max-w-md text-center transition-all transform bg-lightSecondary shadow-xl p-4 rounded-2xl">
              <p className="text-lg font-medium leading-6 text-lightTertiary">
                Thank you for reaching us, will revert asap!
              </p>
              <img src="/img/Feedback.png" className="w-max" />
            </div>
          </motion.div>
        )}
      </div>
    </BasePage>
  );
};

export async function getStaticProps() {
  const user_id = process.env.EMAILJS_USER_ID;
  return {
    props: { user_id },
  };
}

export default Reachouttous;
