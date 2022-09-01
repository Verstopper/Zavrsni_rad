import React, { Component } from "react";
import GameChoice from "./GameChoice";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>This is HomePage</h2>
        <GameChoice/>
      </div>
    );
  }
}

export default HomePage;
