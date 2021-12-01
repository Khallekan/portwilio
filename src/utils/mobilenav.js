import {
  RiHome7Fill,
  RiHome7Line,
  RiSettings5Fill,
  RiSettings5Line,
} from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { BsFillPersonFill, BsPerson } from "react-icons/bs";
const items = [
  { name: `Home`, activeIcon: <RiHome7Fill />, icon: <RiHome7Line />, to: "" },
  {
    name: `Profile`,
    activeIcon: <BsFillPersonFill />,
    icon: <BsPerson />,
    to: "profile",
  },
  {
    name: `Projects`,
    activeIcon: <IoSearch />,
    icon: <IoIosSearch />,
    to: "projects",
  },
  {
    name: `Settings`,
    activeIcon: <RiSettings5Fill />,
    icon: <RiSettings5Line />,
    to: "settings",
  },
];

export { items };
