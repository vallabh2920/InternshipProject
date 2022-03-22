import React from "react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      name: "Data policy",
      url: "/",
    },
    {
      id: 2,
      name: "Terms & Condition",
      url: "/tandc",
    },
    {
      id: 3,
      name: "Privacy & Policies",
      url: "/pandp",
    },
  ];

  return (
    <>
      <div className="w-full bg-lightSecondary py-8 px-5  ">
        <div className="flex flex-wrap max-w-7xl m-auto justify-between items-center  ">
          <div className="space-y-5 flex-1 mb-6">
            <div className="bg-lightPrimary p-3 rounded-md max-w-max">
              <h2 className="text-2xl text-lightTertiary font-bold">
                DB support
              </h2>
            </div>
            <div className="flex space-x-5 items-center">
              <p>connect : </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#027FFA"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.821289 10.224V19.1792H5.14965V9.47774V6.94043H0.821289V10.224Z"
                  fill="#027ffa"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.06009 0.821045C1.86607 0.821045 0.821289 1.86582 0.821289 3.05985C0.821289 4.10463 1.86607 5.1494 3.06009 5.1494C4.10487 5.1494 5.14965 4.10463 5.14965 3.05985C5.14965 1.86582 4.10487 0.821045 3.06009 0.821045ZM19.0302 10.6718C18.7317 8.43298 17.687 6.94045 14.5526 6.94045C12.7616 6.94045 11.5676 7.68672 10.9705 8.58224V6.94045H7.53771V9.32851V19.1793H11.1198V13.0599C11.1198 11.5673 11.4183 9.92552 13.3586 9.92552C15.2989 9.92552 15.4482 11.8658 15.4482 13.2091V19.1793H19.1795V12.4628C19.1795 11.8658 19.1795 11.2688 19.0302 10.6718Z"
                  fill="#027ffa"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <ul className="flex space-x-11 text-lg text-lightTertiary md:flex-col md:space-x-0  ">
              {footerLinks.map((values) => {
                return (
                  <li
                    className="hover:text-lightPrimary cursor-pointer md:cursor-default active:text-lightPrimary"
                    key={values.id}
                  >
                    <Link href={values.url}>
                      <a>{values.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-lightTertiary py-2 px-5">
        <div className="flex flex-wrap sm:space-y-2 justify-between items-center max-w-7xl m-auto text-white ">
          <span className="flex items-center space-x-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.23 14.2537C13.2956 13.8206 13.44 13.44 13.6238 13.1119C13.8075 12.7837 14.07 12.5081 14.3981 12.2981C14.7131 12.1012 15.1069 12.0094 15.5925 11.9963C15.8944 12.0094 16.17 12.0619 16.4194 12.1669C16.6819 12.285 16.9181 12.4425 17.1019 12.6394C17.2856 12.8363 17.43 13.0725 17.5481 13.335C17.6662 13.5975 17.7188 13.8863 17.7319 14.175H20.0813C20.055 13.5581 19.9369 12.9938 19.7138 12.4819C19.4906 11.97 19.1887 11.5238 18.795 11.1562C18.4012 10.7887 17.9287 10.5 17.3775 10.29C16.8262 10.08 16.2225 9.98813 15.5531 9.98813C14.7 9.98813 13.9519 10.1325 13.3219 10.4344C12.6919 10.7362 12.1669 11.13 11.7469 11.6419C11.3269 12.1537 11.0119 12.7444 10.815 13.4269C10.6181 14.1094 10.5 14.8181 10.5 15.5794V15.9338C10.5 16.695 10.605 17.4037 10.8019 18.0862C10.9987 18.7687 11.3137 19.3594 11.7337 19.8581C12.1537 20.3569 12.6788 20.7638 13.3088 21.0525C13.9388 21.3413 14.6869 21.4987 15.54 21.4987C16.1569 21.4987 16.7344 21.3937 17.2725 21.1969C17.8106 21 18.2831 20.7244 18.69 20.37C19.0969 20.0156 19.425 19.6087 19.6612 19.1362C19.8975 18.6637 20.0419 18.165 20.055 17.6269H17.7056C17.6925 17.9025 17.6269 18.1519 17.5088 18.3881C17.3906 18.6244 17.2331 18.8213 17.0362 18.9919C16.8394 19.1625 16.6163 19.2938 16.3538 19.3856C16.1044 19.4775 15.8419 19.5037 15.5662 19.5169C15.0937 19.5037 14.7 19.4119 14.3981 19.215C14.07 19.005 13.8075 18.7294 13.6238 18.4013C13.44 18.0731 13.2956 17.6794 13.23 17.2463C13.1644 16.8131 13.125 16.3669 13.125 15.9338V15.5794C13.125 15.12 13.1644 14.6869 13.23 14.2537V14.2537ZM15.75 2.625C8.505 2.625 2.625 8.505 2.625 15.75C2.625 22.995 8.505 28.875 15.75 28.875C22.995 28.875 28.875 22.995 28.875 15.75C28.875 8.505 22.995 2.625 15.75 2.625ZM15.75 26.25C9.96188 26.25 5.25 21.5381 5.25 15.75C5.25 9.96188 9.96188 5.25 15.75 5.25C21.5381 5.25 26.25 9.96188 26.25 15.75C26.25 21.5381 21.5381 26.25 15.75 26.25Z"
                fill="#F9F7F7"
              />
            </svg>
            <p>All Rights Reserved</p>
          </span>
          <p>example@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
