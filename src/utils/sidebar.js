// RiHome7Fill,
// RiHome7Line,
import { RiSettings5Fill, RiSettings5Line } from "react-icons/ri";
import {
  BsFillPersonFill,
  BsPerson,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsTelephoneFill,
  BsBriefcase,
  BsBriefcaseFill,
} from "react-icons/bs";
import {
  HiOutlineHashtag,
  HiHashtag,
  HiPuzzle,
  HiOutlinePuzzle,
} from "react-icons/hi";
import { IoMailSharp } from "react-icons/io5";
import Main from "../containers/Main";
import Home from "../containers/Home";
import Projects from "../containers/Projects";
import Settings from "../containers/Settings";
import Profile from "../containers/Profile";
import ProfileSkills from "../components/ProfileSkills";
import ProfileExperience from "../components/ProfileExperience";

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
      {
        path: `/profile/*`,
        element: <Profile />,
        children: [
          { index: true, element: <ProfileSkills /> },
          { path: `experience`, element: <ProfileExperience /> },
        ],
      },
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
const profileNav = [
  {
    activeIcon: <HiPuzzle />,
    icon: <HiOutlinePuzzle />,
    title: `Skills`,
    to: `/profile`,
  },
  {
    activeIcon: <BsBriefcaseFill />,
    icon: <BsBriefcase />,
    title: `Experience`,
    to: `/profile/experience`,
  },
];

const projects = [
  {
    img: `https://res.cloudinary.com/duziwvlis/image/upload/v1638032291/Screenshot_2021-11-27_175414_kjsoyf.jpg`,
    title: `Country Finder`,
    github: `https://github.com/Khallekan/rest-countries-api-with-color-switcher`,
    description: `A simple app that allows you to search for countries by name, capital, region, subregion, population, area, currency, language, flag, and more.`,
    link: `https://country-finder-phi.vercel.app`,
    tech: [`React`, `Tailwind`, `Countries Rest Api`, `SCSS`],
  },
  {
    img: `https://res.cloudinary.com/duziwvlis/image/upload/v1638032288/Screenshot_2021-11-23_181841_hqfban.jpg`,
    title: `BarterTrade`,
    github: `https://github.com/Khallekan/BarterTrade`,
    description: `An open source project that connects users to trade items without the use of money`,
    link: `https://zuri-bartertrade.vercel.app`,
    tech: [`HTML`, `CSS`, `Tailwind`, `Node`, `JavaScript`],
  },
  {
    img: `https://res.cloudinary.com/duziwvlis/image/upload/v1638032287/Screenshot_2021-11-23_180544_xlycqf.jpg`,
    title: `Shortly`,
    github: `https://github.com/Khallekan/Shortner`,
    description: `A simple URL shortener that allows you to shorten your links and share them with others.`,
    link: `http://shortly-link-shortner.vercel.app`,
    tech: [`HTML`, `SCSS`, `JavaScript`, `Shrtcode API`],
  },
  {
    img: `https://res.cloudinary.com/duziwvlis/image/upload/v1638032292/Screenshot_2021-11-23_181643_ensi12.jpg`,
    title: `Loopstudios`,
    github: `https://github.com/Khallekan/Loopstudios`,
    description: `A simple landing page for a VR company. Fully responsive and mobile friendly.`,
    link: `https://challenge12-khallekan.vercel.app`,
    tech: [`HTML`, `SCSS`, `JavaScript`],
  },
  {
    img: `https://res.cloudinary.com/duziwvlis/image/upload/v1638032291/Screenshot_2021-11-23_181417_b9oafl.jpg`,
    title: `Easybank Landing Page`,
    github: `https://github.com/Khallekan/easybank-landing`,
    description: `A simple landing page for a bank. Fully responsive and mobile friendly.`,
    link: `http://challenge14-git-master.khallekan.vercel.app/`,
    tech: [`HTML`, `SCSS`, `JavaScript`],
  },
];

const experience = [
  {
    organization: `Developer Students Club.`,
    position: `Intern`,
    duration: `Sept 2020 - Dec 2020`,
    activities: [
      `Built frontend applications by converting UI/UX designs to fully scalable, interactive and responsive websites.`,
    ],
  },
  {
    organization: `Zuri Training.`,
    position: `Intern`,
    duration: `March 2021 - July 2021`,
    activities: [
      `Built a full stack web application in a team using HTML, CSS, JavaScript`,
      `Collaborated with various developers and designers to build and deploy a fully functional application.`,
    ],
  },
  {
    organization: `HNG Internship 8 - Operated by Zuri.`,
    position: `Intern`,
    duration: `August 2021 - September 2021`,
    activities: [
      `Contributed to an open source project to facilitate the communication between a large amount of users.`,
    ],
  },
  {
    organization: `Freelance`,
    position: `Frontend Developer`,
    duration: `April 2020 - Present`,
    activities: [
      `Implemented websites, frontend applications and landing pages from concept using React.js, SCSS, bootstrap.`,
      `Collaborated with various developers and designers to build and deploy responsive and interactive websites with a mobile first approach.`,
    ],
  },
];

const settingsItems = {
  buttonThemeItems: [
    { className: `settings-buttonTheme button-lightBlue`, name: `BLUE` },
    { className: `settings-buttonTheme button-yellow`, name: `YELLOW` },
    { className: `settings-buttonTheme button-pink`, name: `PINK` },
    { className: `settings-buttonTheme button-purple`, name: `PURPLE` },
    { className: `settings-buttonTheme button-orange`, name: `ORANGE` },
    { className: `settings-buttonTheme button-green`, name: `GREEN` },
  ],
  bgThemeItems: [
    { className: `settings-bgTheme settings-lightbtn`, name: `LIGHT` },
    { className: `settings-bgTheme settings-dimbtn`, name: `DIM` },
    { className: `settings-bgTheme settings-darkbtn`, name: `DARK` },
  ],
};

export {
  items,
  routes,
  socialLinks,
  profileNav,
  projects,
  experience,
  settingsItems,
};
