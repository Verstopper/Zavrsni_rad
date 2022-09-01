import React, { Component } from "react";
import "./Hangman.css";
import image0 from "./images/0.jpg";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import axios from 'axios';
import swal from '@sweetalert/with-react';


class Hangman extends Component {

  
  async randomWord() {
    axios
    .get(
      "https://en.wikipedia.org/api/rest_v1/page/random/summary"
    )
    .then(res => {
      console.log(res)
      const thumbnail = res.data.thumbnail.source;
        let title = res.data.title;
        const page = res.data.content_urls.desktop.page;
        const summary = res.data.extract;
        this.setState({
          page : page,
          thumbnail : thumbnail,
          summary : summary,
          answer : title.toLowerCase(),
          realtitle : title
        })        
    });
}
  static defaultProps = {
    maxWrong: 6,
    images: [image0, image1, image2, image3, image4, image5, image6],
  };

  constructor(props) {
   
    super(props);
    this.state = {
      noOfWrong: 0,
      guessed: new Set(),
      answer: "",
      page: "",
      summary:"",
      thumbnail: "",
      realtitle : ""
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
    this.randomWord();
  }

  reset() {
    this.setState({
      noOfWrong: 0,
      guessed: new Set(),
    });
    this.randomWord();
  }
  guessedWord() {
    console.log( this.state.answer);
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  handleGuess(evt) {
    let letter = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      noOfWrong: st.noOfWrong + (st.answer.includes(letter) ? 0 : 1),
    }));
  }

  //komentar
  generateKeypad() {
    return "abcdefghijklmnopqrstuvwxyz ".split("").map((letter) => (
      <div className="container">
        <button
        className="btn btn-info"
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter===" " ? "razmak" : letter}
      </button>
      </div>
    ));
  }

  render() {
    const gameOver = this.state.noOfWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameState = this.generateKeypad();
    if (isWinner){
      gameState = "Čestitam, uspješno pogođena riječ";
      swal(
        <div>
          <h1 className='text-dark'>{this.state.realtitle}</h1>
          <p className='text-dark'>{this.state.summary}</p>
          {/* <a href={this.state.page} className='text-dark'>Link na članak</a> */}
          <img src={this.state.thumbnail}></img>
        </div>
      )
    }
    if (gameOver){
      swal(
        <div>
          <h1 className='text-dark'>{this.state.realtitle}</h1>
          <p className='text-dark'>{this.state.summary}</p>
          {/* <a href={this.state.page} className='text-dark'>Link na članak</a> */}
          <img src={this.state.thumbnail}></img>
        </div>
      )
      gameState = "Više sreće drugi put";
    } 
    let restart = gameOver || isWinner;
    return (
      <div className="Hangman">
        <h2>Wiki vješala</h2>
        <img src={this.props.images[this.state.noOfWrong]} alt="HangMan" />
        <p>
          Preostalo pokušaja: {this.props.maxWrong - this.state.noOfWrong} /{" "}
          {this.props.maxWrong}
        </p>
        <p>Pogodi riječ</p>
        <p className="Hangman-word">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <p className="Hangman-btns">{gameState}</p>
        {restart && (
          <button className="btn btn-warning" onClick={this.reset}>
            Igraj ponovno!
          </button>
        )}
      </div>
    );
  }
}

export default Hangman;
