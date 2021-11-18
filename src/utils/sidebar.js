// RiHome7Fill,
// RiHome7Line,
import { RiSettings5Fill, RiSettings5Line } from "react-icons/ri";
// import { BiHash } from "react-icons/bi";
import {
  BsFillPersonFill,
  BsPerson,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsTelephoneFill,
} from "react-icons/bs";
import { HiOutlineHashtag, HiHashtag } from "react-icons/hi";
import { IoMailSharp } from "react-icons/io5";
import Main from "../containers/Main";
import Home from "../containers/Home";
import Projects from "../containers/Projects";
import Settings from "../containers/Settings";
import Profile from "../containers/Profile";

const items = [
  { name: `Profile`, icon: <BsPerson />, activeIcon: <BsFillPersonFill /> },
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
      { index: true, element: <Home /> },
      { path: "/home/*", element: <Home /> },
      { path: `/profile`, element: <Profile /> },
      { path: `/projects`, element: <Projects /> },
      { path: `/settings`, element: <Settings /> },
    ],
  },
];

const socialLinks = [
  {
    app: `github`,
    classNames: `social-container`,
    element: <BsGithub />,
    url: `https://github.com/Khallekan`,
    isTooltipVisible: false,
  },
  {
    app: `email`,
    classNames: `social-container mail`,
    element: <IoMailSharp />,
    url: `mailto:okeolalekanisaac@gmail.com`,
    isTooltipVisible: false,
  },
  {
    app: `phone`,
    classNames: `social-container telephone`,
    element: <BsTelephoneFill />,
    url: `tel:+2348179459363`,
    isTooltipVisible: false,
  },
  {
    app: `twitter`,
    classNames: `social-container twitter`,
    element: <BsTwitter />,
    url: `https://twitter.com/Khallekan`,
    isTooltipVisible: false,
  },
  {
    app: `linkedin`,
    classNames: `social-container linkedin`,
    element: <BsLinkedin />,
    url: `http://www.linkedin.com/in/oke-olalekan-100`,
    isTooltipVisible: false,
  },
];

export { items, routes, socialLinks };
