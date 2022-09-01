import React, { Component } from "react";
import { useParams } from "react-router-dom";

function Wrapper({ component, animate }) {
  let params = useParams();
  return React.createElement(component, { id: params.id });
}

export default Wrapper;
