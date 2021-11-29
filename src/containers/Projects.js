import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Socials from "../components/Socials";
import Button from "../components/Button";
import useWindowDimensions from "../utils/hooks";

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
    description: `Open source project that connects users to trade items without the use of money`,
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
];

const Projects = () => {
  const { dispatch, isMobile } = useGlobalContext();
  const { width } = useWindowDimensions();
  useEffect(() => {
    dispatch({ type: `HANDLE_MODAL`, payload: false });
  }, [dispatch]);
  return (
    <div className={`mainapp-content_container`}>
      <section className='section1 project-container'>
        {projects.map((project, index) => {
          return (
            <div key={index} className='project-card'>
              <img src={project.img} alt={project.title} />
              <div className='project-card_info'>
                <h3 className='project-card_title'>{project.title}</h3>
                <p className='project-card_description'>
                  {project.description}
                </p>
                <div className='project-card_tech'>
                  {project.tech.map((tech, index) => {
                    return <span key={index}>{tech}</span>;
                  })}
                </div>
                <div className='project-card_links'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button className='project-card_link'>Github</Button>
                  </a>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button className='project-card_link'>Live</Button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className='section2 mainapp_home_container'>
        <Socials className={`mainapp_home-socials`} />
      </section>
    </div>
  );
};

export default Projects;
