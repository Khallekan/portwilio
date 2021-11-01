import React from "react";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { useRouteMatch, Switch, Route } from "react-router";
import About from "../components/About";
import Projects from "../components/Projects";
import "../styles/Home.css";
const Home = () => {
  let { path, url } = useRouteMatch();
  return (
    <motion.div className={`mainapp`}>
      <Sidebar />
      <Switch>
        <Route exact path={[`${path}`, `${path}home`]} component={About} />
        <Route exact path={`${path}projects`} component={Projects} />
      </Switch>
    </motion.div>
  );
};

export default Home;
