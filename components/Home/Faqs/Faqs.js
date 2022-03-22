import React from "react";
import BasePage from "../../../layout/BasePage";
import Accordion from "./Accordion/Accordion";
import { questions } from "./Accordion/questions";

const Faqs = () => {
  const [query, setQuery] = React.useState("");

  const SearchResult = questions.filter((value) => {
    return Object.values(value)
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase());
  });

  return (
    <BasePage>
      <div className="px-5 pt-20">
        <div className="flex justify-center items-center max-w-4xl m-auto drop-shadow-md bg-lightSecondary rounded-full relative mb-10">
          <input
            className="w-full h-16 pl-9 pr-20 text-2xl border-none outline-none rounded-full"
            type="text"
            placeholder="Search your queriers?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="bg-white p-3 rounded-full absolute right-5 z-10 hover:bg-grey cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-5 pb-10">
          {query === ""
            ? questions.map((value) => {
                const { id } = value;
                return <Accordion key={id} {...value} />;
              })
            : SearchResult.map((value) => {
                const { id } = value;
                return <Accordion key={id} {...value} />;
              })}
        </div>
      </div>
    </BasePage>
  );
};

export default Faqs;
