import React from "react";
import "../output.css";
import { Tooltip, Button } from "antd";
import { Link, NavLink } from "react-router-dom";
import {
  BarsOutlined,
  DeleteOutlined,
  MessageOutlined,
  OpenAIOutlined,
  PhoneOutlined,
  SettingOutlined,
  StarOutlined,
  UserOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BottomDrawer from "./Pages/BottomDrawer";

const DashbordLinks = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`flex flex-col  h-full w-full px-3 ${
        !isOpen ? "items-center" : ""
      }`}
      style={{ backgroundColor: "#F0F0F0" }}
    >
      <ul className="flex flex-col gap-4 " style={{ height: "50vh" }}>
        <li
          className=""
          style={{
            marginTop: "20px",
          }}
        >
          <Button onClick={toggleMenu} icon={<BarsOutlined />} />
        </li>
        <li
          className={`listClass ${
            location.pathname === "/"
              ? "bg-red-500 p-1 border border-black rounded"
              : ""
          }`}
          onClick={() => navigate("/")}
        >
          <Tooltip title="Chats" placement="top">
            <Button icon={<WechatOutlined />} />
          </Tooltip>
          {isOpen && <NavLink to="/">Chats</NavLink>}
        </li>
        <li
          className={`listClass ${
            location.pathname === "/call"
              ? "bg-red-500 p-1 border border-black rounded"
              : ""
          }`}
          onClick={() => navigate("/call")}
        >
          <Tooltip title="Calls" placement="top">
            <Button icon={<PhoneOutlined />} />
          </Tooltip>
          {isOpen && <NavLink to="">Calls</NavLink>}
        </li>
        <li
          className={`listClass ${
            location.pathname === "/status"
              ? "bg-red-500 p-1 border border-black rounded"
              : ""
          }`}
          onClick={() => navigate("/status")}
        >
          <Tooltip title="Status" placement="top">
            <Button icon={<MessageOutlined />} />
          </Tooltip>
          {isOpen && <NavLink to="">Status</NavLink>}
        </li>
        <hr style={{ borderColor: "black", borderWidth: "1px" }} />
        <li
          className={`listClass ${
            location.pathname === "/ai"
              ? "bg-red-500 p-1 border border-black rounded"
              : ""
          }`}
          onClick={() => navigate("/ai")}
        >
          <Tooltip title="Meta AI" placement="top">
            <Button icon={<OpenAIOutlined />} />
          </Tooltip>
          {isOpen && <NavLink to="">Meta AI</NavLink>}
        </li>
      </ul>
      <ul
        className=" py-3 flex flex-col justify-end gap-4"
        style={{ height: "50vh" }}
      >
        <li
          className={`listClass ${
            location.pathname === "/starred"
              ? "bg-red-500 p-1 border border-black rounded"
              : ""
          }`}
          onClick={() => navigate("/starred")}
        >
          <Tooltip title="Starred messages" placement="top">
            <Button icon={<StarOutlined />} />
          </Tooltip>
          {isOpen && <NavLink to="">Starred messages</NavLink>}
        </li>
        <li
          className={`listClass ${
            location.pathname === "/archievedChats"
              ? "bg-red-500 p-1 border border-black rounded"
              : ""
          }`}
          onClick={() => navigate("/archievedChats")}
        >
          <Tooltip title="Archived Chats" placement="top">
            <Button icon={<DeleteOutlined />} />
          </Tooltip>
          {isOpen && <NavLink to="">Archived Chats</NavLink>}
        </li>
        <hr style={{ borderColor: "black", borderWidth: "1px" }} />
        <li
          className={`listClass ${
            location.pathname === "/setting"
              ? "bg-red-500 p-1 border border-black rounded"
              : ""
          }`}
        >
          <BottomDrawer isOpen={isOpen} icon={SettingOutlined} name="Setting" />
        </li>
        <li
          className={`listClass ${
            location.pathname === "/profile"
              ? "bg-red-500 p-1 border border-black rounded"
              : ""
          }`}
        >
          {/* <Tooltip title="Profile" placement="top">
            <Button icon={<UserOutlined />} />
          </Tooltip>
          {isOpen && <NavLink to="">Profile</NavLink>} */}
          <BottomDrawer isOpen={isOpen} icon={UserOutlined} name={"Profile"} />
        </li>
      </ul>
    </div>
  );
};

export default DashbordLinks;
