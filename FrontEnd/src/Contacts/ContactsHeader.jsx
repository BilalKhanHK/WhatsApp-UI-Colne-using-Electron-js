import React from "react";
import "../output.css";
import { Tooltip, Button } from "antd";
import {
  AlignCenterOutlined,
  EditOutlined,
  TagOutlined,
} from "@ant-design/icons";
import Search from "antd/es/transfer/search";

const ContactsHeader = () => {
  return (
    <div className="w-full  ">
      <div className="flex justify-between ">
        <h1 className="font-bold">Chats</h1>
        <div className="flex gap-5">
          <Tooltip title="New Message" placement="topLeft">
            <EditOutlined className="text-black text-2xl" />
          </Tooltip>
          <Tooltip title="New Message" placement="topLeft">
            <TagOutlined className="text-black text-2xl" />
          </Tooltip>
          <Tooltip title="New Message" placement="topLeft">
            <AlignCenterOutlined className="text-black text-2xl" />
          </Tooltip>
        </div>
      </div>
      <div className="mt-3">
        <Search placeholder="Search or start a new chat" />
      </div>
    </div>
  );
};

export default ContactsHeader;
