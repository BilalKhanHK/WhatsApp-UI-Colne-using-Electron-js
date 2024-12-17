import React from "react";
import ContactsHeader from "./ContactsHeader";
import "../output.css";
import myImage from "./my image.jpg";
import { DummyContacts } from "./DummyContacts";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-full w-full">
      <ContactsHeader />
      <div className="my-4">
        {DummyContacts.map((value, index) => {
          return (
            <div
              key={index}
              className="mb-4 flex gap-3"
              onClick={() => {
                navigate("/messages", { state: { value } });
              }}
            >
              <div>
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={myImage}
                  alt="profile-pic"
                />
              </div>
              <div className="flex ">
                <div className=" ">
                  <h1 className="font-bold ">{value.name}</h1>
                  <p>{value.message.slice(0, 40)}...</p>
                </div>
                <div className="">
                  <p>{value.Time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
