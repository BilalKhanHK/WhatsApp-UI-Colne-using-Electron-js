import React from "react";
import myImage from "../../Contacts/my image.jpg";
import { DummyContacts } from "../../Contacts/DummyContacts";

const StatusData = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-2xl italic">Status</h1>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <img
            src={myImage}
            alt=""
            className="w-16 h-16 rounded-full border border-black  object-cover p-1"
          />
        </div>
        <div>
          <h1 className="text-black font-bold italic">My status</h1>
          <p>No updates</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1>Viewed updates</h1>
        {DummyContacts.map((value, index) => {
          return (
            <div key={index} className="flex gap-5 items-center">
              <div className="flex gap-5 items-center">
                <div>
                  <img
                    src={myImage}
                    alt=""
                    className="w-16 h-16 rounded-full border border-black  object-cover p-1"
                  />
                </div>
                <div>
                  <h1 className="text-black font-bold italic">{value.name}</h1>
                  <p>Yesterday 12:06 PM</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusData;
