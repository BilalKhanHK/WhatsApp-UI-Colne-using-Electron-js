import React from "react";
import WhatsApp from "../WindowControl/logo.jpeg";
import { NavLink } from "react-router-dom";

const SecondDefaultPage = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-full gap-3">
      <img src={WhatsApp} alt="" className="w-24 " />
      <h1>WhatsApp for Windows2</h1>
      <div className="text-center">
        <p>
          This app does not currently have WhatsApp Business featuers (like
          catalogs, labels, and messaging tools).
        </p>
        <p>
          These featuers are available on{" "}
          <NavLink
            className="text-green-600 underline text-xl"
            to="https://web.whatsapp.com/"
          >
            web.whatsapp.com
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SecondDefaultPage;
