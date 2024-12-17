import React, { useEffect, useState } from "react";
import DrawarLinks from "./DrawarLinks";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import GeneralPage from "./GeneralPage";
import AccountPage from "./AccountPage";
import ChatsPage from "./ChatsPage";
import VedioVoice from "./Vedio&Voice";
import Notifications from "./Notifications";
import Personalization from "./Personalization";
import Storage from "./Storage";
import Shortcuts from "./Shortcuts";
import Help from "./Help";
import Profile from "./Profile";
import { setOpen } from "../../Store/Slices/OpenCloseDrawar";
import { Button } from "antd";

const DrawarLayout = ({ children, showDrawer }) => {
  const [isScreenWidth, setIsScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setIsScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //get the value of currect page from redux
  const currentPage = useSelector((state) => state.currentPage);

  return (
    <div className={` rounded h-full flex `}>
      <div
        style={{
          backgroundColor: "#F0F0F0",
          maxHeight: "100%",
          overflowY: "scroll",
          scrollbarWidth: "none",
          width: "37%",
        }}
        className=" p-2 "
      >
        <DrawarLinks />
      </div>
      <main
        className="  flex flex-col justify-between"
        style={{
          width: "63%",
        }}
      >
        <div
          className="border-2 border-black rounded  p-3"
          style={{
            maxHeight: "93%",
            overflowY: "scroll",
            scrollbarWidth: "none",
          }}
        >
          {currentPage === "General" && <GeneralPage />}
          {currentPage === "Account" && <AccountPage />}
          {currentPage === "Chats" && <ChatsPage />}
          {currentPage === "Video&voice" && <VedioVoice />}
          {currentPage === "Notifications" && <Notifications />}
          {currentPage === "Personalization" && <Personalization />}
          {currentPage === "Storage" && <Storage />}
          {currentPage === "Shortcuts" && <Shortcuts />}
          {currentPage === "Help" && <Help />}
          {currentPage === "Profile" && <Profile />}
        </div>
        <div
          className="flex justify-center w-full bg-green-500 rounded-full "
          style={{
            height: "6%",
          }}
        >
          <div className="flex justify-between w-1/2 items-center">
            <Button onClick={showDrawer}>Cancel</Button>
            <Button type="primary" onClick={showDrawer}>
              OK
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DrawarLayout;
