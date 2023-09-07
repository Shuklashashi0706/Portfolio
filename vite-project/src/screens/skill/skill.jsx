import React from "react";
import Mongodb from "../../assets/svg/mongodb.svg";
import Express from "../../assets/svg/express.svg";
import Node from "../../assets/svg/node.svg";
import react from "../../assets/svg/react.svg";
const skill = () => {
  return (
    <div className="h-[525px] bg-black">
      <div className="text-white flex justify-center flex-col  h-full">
        <div className="text-3xl text-center">
          <h1 className="">
            Techstacks <span className="text-[#da4cc0]  ">Known</span>
          </h1>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 ">
          <img className="w-[200px] p-3" src={Mongodb} alt="" />
          <img className="w-[200px] p-3 text-white" src={Express} alt="" />
          <img className="w-[200px] p-3 text-white" src={react} alt="" />
          <img className="w-[200px] p-3 text-white" src={Node} alt="" />
        </div>
      </div>
    </div>
  );
};

export default skill;
