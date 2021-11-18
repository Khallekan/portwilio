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
  { name: `Home`, activeIcon: <RiHome7Fill />, icon: <RiHome7Line /> },
  { name: `Profile`, activeIcon: <BsFillPersonFill />, icon: <BsPerson /> },
  { name: `Projects`, activeIcon: <IoSearch />, icon: <IoIosSearch /> },
  {
    name: `Settings`,
    activeIcon: <RiSettings5Fill />,
    icon: <RiSettings5Line />,
  },
];

export { items };
