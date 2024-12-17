import Search from "antd/es/transfer/search";
import React from "react";

const ArchievedData = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold">Archived</h1>
        <Search placeholder="Search archived chats" />
      </div>
      <div className="mb-72 text-center">no results</div>
    </div>
  );
};

export default ArchievedData;
