import React from "react";
import Layout from "../Layout/Layout";
import { useLocation } from "react-router-dom";
import myImage from "../../Contacts/my image.jpg";
import { Button, Dropdown, Tooltip } from "antd";
import {
  MoreOutlined,
  PhoneOutlined,
  SearchOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import HoverMenuOfMessage from "./HoverMenuOfMessage";
import SentMessageComponents from "../SentMessageComponents";

const MessagesPage = () => {
  const location = useLocation();
  const { value } = location.state || {}; // Access the passed value safely
  return (
    <Layout>
      <div className="flex flex-col justify-between  h-full">
        <div>
          <div
            className=" flex justify-between p-2 items-center"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="flex items-center gap-4">
              <img
                src={myImage}
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />
              <h1 className="font-bold italic">{value.name}</h1>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-1">
                <Tooltip title="Vedio Call" placement="top">
                  <Button icon={<VideoCameraOutlined />} />
                </Tooltip>
                <Tooltip title="Voice Call" placement="top">
                  <Button icon={<PhoneOutlined />} />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Search" placement="top">
                  <Button icon={<SearchOutlined />} />
                </Tooltip>
              </div>
            </div>
          </div>
          {/* Messages starts here  */}
          <div
            class="flex flex-col space-y-4 p-4"
            style={{
              maxHeight: "72vh",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            {/* <!-- Received Message (left) --> */}
            <div class="flex justify-start">
              <div className="flex items-center group">
                <div class="bg-gray-200 text-black p-3 rounded-lg max-w-xs">
                  <p>This is a received message.</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Dropdown
                    overlay={<HoverMenuOfMessage />}
                    trigger={["click"]}
                  >
                    <MoreOutlined className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl" />
                  </Dropdown>
                </div>
              </div>
            </div>

            {/* <!-- Sent Message (right) --> */}
            <div class="flex justify-end">
              <div className="flex items-center group">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Dropdown
                    overlay={<HoverMenuOfMessage />}
                    trigger={["click"]}
                  >
                    <MoreOutlined className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl" />
                  </Dropdown>
                </div>
                <div class="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                  <p>This is a sent message.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full" style={{ backgroundColor: "#FFFFFF" }}>
          <SentMessageComponents />
        </div>
      </div>
    </Layout>
  );
};

export default MessagesPage;
