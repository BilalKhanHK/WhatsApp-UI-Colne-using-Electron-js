import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CopyOutlined,
  DeleteOutlined,
  PushpinOutlined,
  SelectOutlined,
  ShareAltOutlined,
  StarOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import React, { useState } from "react";

const HoverMenuOfMessage = () => {
  return (
    <Menu style={{ backgroundColor: "#F0F0F0" }} className="w-72 ">
      <div className="flex flex-col gap-3">
        <Menu.Item key="1">
          <div className="iconsAssembling">
            <ArrowLeftOutlined className="text-xl" />
            <h1>Reply</h1>
          </div>
        </Menu.Item>
        <Menu.Item key="2">
          <div className="iconsAssembling">
            <CopyOutlined className="text-xl" />
            <h1>Copy</h1>
          </div>
        </Menu.Item>
        <hr />
        <Menu.Item key="3">
          <div className="iconsAssembling">
            <ArrowRightOutlined className="text-xl" />
            <h1>Forward</h1>
          </div>
        </Menu.Item>
        <Menu.Item key="4">
          <div className="iconsAssembling">
            <StarOutlined className="text-xl" />
            <h1>Star</h1>
          </div>
        </Menu.Item>
        <Menu.Item key="5">
          <div className="iconsAssembling">
            <PushpinOutlined className="text-xl" />
            <h1>Pin</h1>
          </div>
        </Menu.Item>
        <Menu.Item key="6">
          <div className="iconsAssembling">
            <DeleteOutlined className="text-xl" />
            <h1>Delete for me</h1>
          </div>
        </Menu.Item>
        <hr />
        <Menu.Item key="7">
          <div className="iconsAssembling">
            <SelectOutlined className="text-xl" />
            <h1>Select</h1>
          </div>
        </Menu.Item>
        <Menu.Item key="8">
          <div className="iconsAssembling">
            <ShareAltOutlined className="text-xl" />
            <h1>Share</h1>
          </div>
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default HoverMenuOfMessage;
