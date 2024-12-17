import React from "react";
import Layout from "../Layout/Layout";
import {
  OpenAIFilled,
  OpenAIOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import BottomDrawer from "./BottomDrawer";

const AiPage = () => {
  return (
    <Layout>
      <div className="flex justify-between flex-col  h-full">
        <div
          style={{ backgroundColor: "#ffffff" }}
          className="flex  items-center p-3 justify-between"
        >
          <div className="flex gap-4 items-center">
            <div>
              <OpenAIFilled className="text-3xl text-blue-500 border border-black rounded-full p-2 bg-gray-600" />
            </div>
            <div>
              <h1 className="font-bold">Meta AI</h1>
              <p style={{ fontSize: "12px" }}>AI by Meta</p>
            </div>
          </div>
          <div className="me-2">
            <SearchOutlined className="text-2xl" />
          </div>
        </div>

        <div style={{ backgroundColor: "#FFFFFF" }} className="p-3">
          <h1 className="font-bold text-center italic">
            To chat with this AI, review and accept the terms.
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default AiPage;
