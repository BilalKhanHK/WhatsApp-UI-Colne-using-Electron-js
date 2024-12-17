import {
  AlignCenterOutlined,
  PhoneOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";
import { DummyContacts } from "../../Contacts/DummyContacts";
import myImage from "../../Contacts/my image.jpg";

const CallsData = () => {
  return (
    <div className=" h-full flex flex-col gap-7">
      <div className="flex justify-between items-center ">
        <h1 className="font-bold text-xl">Calls</h1>
        <div className="flex gap-5 me-2 items-center">
          <Tooltip title="Dialer" placement="top">
            <AlignCenterOutlined className="text-xl" />
          </Tooltip>
          <Tooltip title="New Call" placement="top">
            <PhoneOutlined className="text-xl" />
          </Tooltip>
        </div>
      </div>
      <div className="">
        <Search placeholder="Search or Start a new call" />
      </div>
      <div className="hover:bg-slate-200 hover:cursor-pointer flex gap-6 p-3 rounded-full">
        <div>
          <SyncOutlined className="text-3xl text-blue-600 border border-black rounded-full p-2" />
        </div>
        <div>
          <h1 className="font-bold">Create call link</h1>
          <p>Share a link for your WhatsApp call</p>
        </div>
      </div>
      <div>
        <div className="">
          <h1 className="font-bold">Recent</h1>
        </div>
        <div>
          {DummyContacts.map((value, index) => {
            return (
              <div
                key={index}
                className="flex  items-center p-3 rounded-full hover:bg-slate-200 hover:cursor-pointer justify-between"
              >
                <div className="flex items-end gap-5">
                  <img
                    src={myImage}
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h1 className="font-bold">{value.name}</h1>
                    <div className="flex gap-2 items-center">
                      <PhoneOutlined />
                      <p>incoming</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p>{value.Time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CallsData;
