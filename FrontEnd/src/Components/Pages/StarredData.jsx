import { FileImageOutlined } from "@ant-design/icons";
import Search from "antd/es/transfer/search";
import React from "react";
import myImage from "../../Contacts/my image.jpg";

const StarredData = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold">Starred Messages</h1>
      </div>
      <div>
        <Search placeholder="Search starred messages" />
      </div>
      <div>
        <h1 className="font-bold">Messages</h1>
        <div className="mt-4 flex flex-col gap-7">
          <div className="flex justify-between ">
            <div className="w-9/12">
              <h1 className="font-bold">John Deo</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                corrupti consectetur itaque sequi voluptatibus labore mollitia
                magni, expedita quidem...
              </p>
            </div>
            <div>
              <p>9/28/2024</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-9/12">
              <h1 className="font-bold">John Deo</h1>
              <div className="flex gap-2">
                <FileImageOutlined />
                <p>Image</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img
                src={myImage}
                alt=""
                className="w-28 h-20 border border-black rounded"
              />
              <p>9/28/2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarredData;
