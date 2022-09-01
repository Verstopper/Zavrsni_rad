import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SlidingPuzzleGame from "../sliding_puzzle/SlidingPuzzleGame";
import Quiz from '../countries_quiz/Quiz'
import HomePage from "./HomePage";
import Wrapper from "./Wrapper";
import Leaderboard from "./Leaderboard";
import NumbersGame from '../Components/NumbersGame';
import MemoryGame from "./MemoryGame";
import HangmanGame from "./HangmanGame";

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route
            path={"homepage/"}
            element={<Wrapper component={HomePage} animate={true} />}
          />
          <Route
            path={"slidingpuzzle/"}
            element={<Wrapper component = {SlidingPuzzleGame} animate = {true} />}
          />
          <Route
            path={"countriesquiz/"}
            element={<Wrapper component = {Quiz} animate = {true} />}
          />
          <Route
            path={"numbersgame/"}
            element={<Wrapper component = {NumbersGame} animate = {true} />}
          />
          <Route
            path={"memory/"}
            element={<Wrapper component = {MemoryGame} animate = {true} />}
          />
          <Route
            path={"hangman/"}
            element={<Wrapper component = {HangmanGame} animate = {true} />}
          />
          <Route
            path={"leaderboard/"}
            element={<Wrapper component = {Leaderboard} animate = {true} />}
          />
          <Route path={"homepage/"} component={HomePage} />
        </Routes>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    );
  }
}

export default RouterComponent;
