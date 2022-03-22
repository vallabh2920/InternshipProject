import React from "react";
import Contactus from "../components/contact/Contactus";
import Reachouttous from "../components/contact/Reachouttous";
import BaseLayout from "../layout/BaseLayout";

const contact = ({ user_id }) => {
  return (
    <BaseLayout>
      <Contactus />
      <div className="bg-curve bg-cover  bg-no-repeat	">
        <Reachouttous userId={user_id} />
      </div>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const user_id = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  return {
    props: { user_id },
  };
}

export default contact;
