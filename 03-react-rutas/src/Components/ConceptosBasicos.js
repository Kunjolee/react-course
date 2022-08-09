import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import ConceptosMenu from "./MenuConceptos";
import Users from "../pages/Users";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Jsx from "../pages/ReactJsx";
import Props from "../pages/ReactProps";
import State from "../pages/ReactState";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <ConceptosMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users/:username" element={<Users />} />
          <Route path="productos" element={<Productos />} />
          <Route path="acerca" element={<Navigate to={"/about"} />} />
          <Route path="contacto" element={<Navigate to={"/contact"} />} />
          <Route path="react" element={<ReactTopics />}>
            <Route path="jsx" element={<Jsx />} />
            <Route path="props" element={<Props />} />
            <Route path="state" element={<State />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      <hr />
      <h2>Conceptos Básicos</h2>
      <Router>
        <ConceptosMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users/:username" element={<Users />} />
          <Route path="productos" element={<Productos />} />
          <Route path="acerca" element={<Navigate to={"/about"} />} />
          <Route path="contacto" element={<Navigate to={"/contact"} />} />
          <Route path="react" element={<ReactTopics />}>
            <Route path="jsx" element={<Jsx />} />
            <Route path="props" element={<Props />} />
            <Route path="state" element={<State />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
