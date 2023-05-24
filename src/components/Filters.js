import React from "react";
import { ImKey } from "react-icons/im";
import { GoFlame } from "react-icons/go";
import { GiSailboat } from "react-icons/gi";
import { RiAliensFill } from "react-icons/ri";
import { BsFillTreeFill } from "react-icons/bs";
import Filter from "./Filter";

const Filters = () => {
  const sorting = [
    { title: "Private", icon: <ImKey /> },
    { title: "New", icon: <GoFlame /> },
    { title: "Boat", icon: <GiSailboat /> },
    { title: "Unique", icon: <RiAliensFill /> },
    { title: "Forest", icon: <BsFillTreeFill /> },
  ];
  return (
    <div className="">
      <div className="flex justify-start gap-3 sm:gap-4 mt-4">
        {sorting.map((obj) => (
          <Filter title={obj.title} icon={obj.icon} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
