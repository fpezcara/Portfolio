import React from "react";
import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { Home, Contact, Projects } from "../pages";

const Routes = () => {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </RoutesWrapper>
  );
};

export default Routes;
