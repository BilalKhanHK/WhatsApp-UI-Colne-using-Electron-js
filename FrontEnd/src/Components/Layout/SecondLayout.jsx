import React, { useEffect, useState } from "react";
import "../../output.css";
import DashbordLinks from "../DashbordLinks";
import WindowControls from "../WindowControl/WindowControl";
import { useLocation } from "react-router-dom";
import SecondDefaultPage from "../Pages/SecondDefaultPage";
import StatusPage from "../Pages/StatusPage";
import CallsData from "../Pages/CallsData";
import StatusData from "../Pages/StatusData";
import StarredData from "../Pages/StarredData";
import ArchievedData from "../Pages/ArchievedData";

const SecondLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScreenWidth, setIsScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
  return (
    <div>
      <div style={{ height: "6vh" }}>
        <WindowControls className="h-full" />
      </div>
      <div className="flex" style={{ height: "94vh" }}>
        <div
          className={`flex h-full ${isOpen ? "SideBarWidth" : ""}`}
          // style={{ height: "100vh" }}
        >
          <DashbordLinks
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            className="h-full w-full "
          />
        </div>
        <div
          className=" w-60 max-h-full rounded-tl-lg  p-5 border-r border-r-black"
          style={{
            width: isScreenWidth >= 650 ? "55vw" : "100vw",
            backgroundColor: "#FFFFFF",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          {location.pathname === "/call" && (
            <CallsData className="h-full w-full" />
          )}
          {location.pathname === "/status" && (
            <StatusData className="h-full w-full" />
          )}
          {location.pathname === "/starred" && (
            <StarredData className="h-full w-full" />
          )}
          {location.pathname === "/archievedChats" && (
            <ArchievedData className="h-full w-full" />
          )}
        </div>

        {isScreenWidth >= 650 && (
          <main
            className="max-h-full bg-slate-100"
            style={{
              // maxHeight: "94vh",
              overflowY: "auto",
              scrollbarWidth: "none",
              width: "100vw",
              // backgroundColor: "#FFFFFF",
            }}
          >
            <SecondDefaultPage />
          </main>
        )}
      </div>
    </div>
  );
};

export default SecondLayout;
