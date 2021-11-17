import {
  RiHome7Fill,
  RiHome7Line,
  RiSettings5Fill,
  RiSettings5Line,
} from "react-icons/ri";
// import { BiHash } from "react-icons/bi";
// import { BsHash } from "react-icons/bs";
import { HiOutlineHashtag, HiHashtag } from "react-icons/hi";
import Main from "../containers/Main";
import Home from "../containers/Home";
import Projects from "../containers/Projects";
import Settings from "../containers/Settings";
import Profile from "../containers/Profile";
import Socials from "../components/Socials";

const items = [
  { name: `Profile`, icon: <RiHome7Line />, activeIcon: <RiHome7Fill /> },
  { name: `Projects`, icon: <HiOutlineHashtag />, activeIcon: <HiHashtag /> },
  {
    name: `Settings`,
    icon: <RiSettings5Line />,
    activeIcon: <RiSettings5Fill />,
  },
];

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/home/*", element: <Home /> },
      { path: `/profile`, element: <Profile /> },
      { path: `/projects`, element: <Projects /> },
      { path: `/settings`, element: <Settings /> },
    ],
  },
];

export { items, routes };
