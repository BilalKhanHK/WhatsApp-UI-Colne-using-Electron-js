import React, { useState } from "react";
import { Button, Drawer, Radio, Space, Tooltip } from "antd";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import DrawarLayout from "../DrawarData/DrawarLayout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setOpen } from "../../Store/Slices/OpenCloseDrawar";

const BottomDrawer = ({ isOpen, icon, name }) => {
  //accessing from redux
  const dispatch = useDispatch();
  const open = useSelector((state) => state.open);
  const showDrawer = () => {
    dispatch(setOpen(!open));
  };

  return (
    <div className="">
      <Space onClick={showDrawer}>
        <Tooltip title={name} placement="bottom">
          <Button icon={React.createElement(icon)} />
        </Tooltip>
        {isOpen && <NavLink to="">{name}</NavLink>}
      </Space>
      <Drawer
        // className="border border-red-500 "
        // title="Drawer with extra actions"
        placement="left"
        height={490}
        width={580}
        onClose={showDrawer}
        closable={false}
        open={open}
        extra={
          <Space>
            <Button onClick={showDrawer}>Cancel</Button>
            <Button type="primary" onClick={showDrawer}>
              OK
            </Button>
          </Space>
        }
      >
        <DrawarLayout showDrawer={showDrawer} />
      </Drawer>
    </div>
  );
};
export default BottomDrawer;
