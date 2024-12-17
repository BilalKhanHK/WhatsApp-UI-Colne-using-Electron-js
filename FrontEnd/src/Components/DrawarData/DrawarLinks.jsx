import React from "react";
// import "../../output.css";
import { Tooltip, Button } from "antd";
import {
  ExclamationOutlined,
  FolderOpenOutlined,
  HeatMapOutlined,
  KeyOutlined,
  LaptopOutlined,
  NotificationFilled,
  QuestionCircleOutlined,
  SwapOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../Store/Slices/RouteSlice";

const DrawarLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  const handleSetCurrentPage = (data) => {
    dispatch(setCurrentPage(data));
  };

  return (
    <div
      className={`flex flex-col justify-between  h-full w-full px-3`}
      style={{ backgroundColor: "#F0F0F0" }}
    >
      <ul className="drawarLinksContainer ">
        <li
          onClick={() => {
            handleSetCurrentPage("General");
          }}
          className={`${currentPage === "General" && "ActiveLink"}`}
        >
          <Tooltip title="General" placement="top">
            <LaptopOutlined className="text-xl drawarlinksiconscolor" />
          </Tooltip>
          <h1>General</h1>
        </li>
        <li
          onClick={() => {
            handleSetCurrentPage("Account");
          }}
          className={`${currentPage === "Account" && "ActiveLink"}`}
        >
          <Tooltip title="Account" placement="top">
            <KeyOutlined className="text-xl drawarlinksiconscolor" />
          </Tooltip>
          <h1>Account</h1>
        </li>
        <li
          onClick={() => {
            handleSetCurrentPage("Chats");
          }}
          className={`${currentPage === "Chats" && "ActiveLink"}`}
        >
          <Tooltip title="Chats" placement="top">
            <WechatOutlined className="text-xl drawarlinksiconscolor" />
          </Tooltip>
          <h1>Chats</h1>
        </li>
        <li
          onClick={() => {
            handleSetCurrentPage("Video&voice");
          }}
          className={`${currentPage === "Video&voice" && "ActiveLink"}`}
        >
          <VideoCameraOutlined className="text-xl drawarlinksiconscolor" />
          <h1>Video & Voice</h1>
        </li>
        <li
          onClick={() => {
            handleSetCurrentPage("Notifications");
          }}
          className={`${currentPage === "Notifications" && "ActiveLink"}`}
        >
          <NotificationFilled className="text-xl drawarlinksiconscolor" />
          <h1>Notifications</h1>
        </li>
        <li
          onClick={() => {
            handleSetCurrentPage("Personalization");
          }}
          className={`${currentPage === "Personalization" && "ActiveLink"}`}
        >
          <ExclamationOutlined className="text-xl drawarlinksiconscolor" />
          <h1>Personalization</h1>
        </li>
        <li
          onClick={() => {
            handleSetCurrentPage("Storage");
          }}
          className={`${currentPage === "Storage" && "ActiveLink"}`}
        >
          <FolderOpenOutlined className="text-xl drawarlinksiconscolor" />
          <h1>Storage</h1>
        </li>
        <li
          onClick={() => {
            handleSetCurrentPage("Shortcuts");
          }}
          className={`${currentPage === "Shortcuts" && "ActiveLink"}`}
        >
          <SwapOutlined className="text-xl drawarlinksiconscolor" />
          <h1>Shortcuts</h1>
        </li>
        <li
          onClick={() => {
            handleSetCurrentPage("Help");
          }}
          className={`${currentPage === "Help" && "ActiveLink"}`}
        >
          <QuestionCircleOutlined className="text-xl drawarlinksiconscolor" />
          <h1>Help</h1>
        </li>
      </ul>
      <ul className="drawarLinksContainer">
        <li
          onClick={() => {
            handleSetCurrentPage("Profile");
          }}
          className={`${currentPage === "Profile" && "ActiveLink"}`}
        >
          <UserOutlined className="text-xl drawarlinksiconscolor" />
          <h1 className="text-red-500">Profile</h1>
        </li>
      </ul>
    </div>
  );
};

export default DrawarLinks;
