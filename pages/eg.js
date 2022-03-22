import React from "react";

const eg = () => {
  return (
    <div className="  mt-20 flex justify-around">
      <div className="mb-32">
        <img src="/img/subscribe.svg" />
      </div>
      <div className="flex flex-col bg-gray-400 justify-center h-80 rounded-xl text-center mt-16 font-bold py-10">
        <h1 className="mt-20 text-2xl hover:underline">Join the Community</h1>

        <input
          className=" mb-5 mt-20 mx-9 py-5 text-center border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md px-10 h-10"
          placeholder="123456@yourmail.com"
        />

        <button className=" mb-32 mx-24 py-2.5 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple- focus:ring-opacity-50 rounded-md my-4 px-14 transform hover:-translate-y-0.5 text-white font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default eg;
