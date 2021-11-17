import {
  RiHome7Fill,
  RiHome7Line,
  RiSettings5Fill,
  RiSettings5Line,
} from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
const items = [
  { name: `Profile`, activeIcon: <RiHome7Fill />, icon: <RiHome7Line /> },
  { name: `Projects`, activeIcon: <IoSearch />, icon: <IoIosSearch /> },
  {
    name: `Settings`,
    activeIcon: <RiSettings5Fill />,
    icon: <RiSettings5Line />,
  },
  { name: `Projects`, activeIcon: <IoSearch />, icon: <IoIosSearch /> },
];

export { items };
