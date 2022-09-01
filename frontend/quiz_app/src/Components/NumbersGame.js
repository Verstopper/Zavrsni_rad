import React, { Component } from "react";
import axios from "axios";

class NumbersGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: Math.floor(Math.random() * 100) + 1 + "",
      guesses: "",
      lastResult: "",
      lowOrHi: "",
      guessCount: 1,
      classLastResult: "",
      classButtonNewGame: "d-none",
      correct: false,
      
      rewardtext: "",
    };

    this.checkGuess = this.checkGuess.bind(this);
  }

  componentDidMount() {
    axios.get(`http://numbersapi.com/` + this.state.randomNumber).then((res) => {
      const rewardtext = res.data;
      this.setState({ rewardtext });
      console.log("USPJESNO DOHVACEN TEKSt " + this.state.rewardtext)
    });
    this.guessNumber.focus();
  }

  componentDidUpdate() {
    if (this.state.classButtonNewGame === "btn btn-primary m-2") {
      this.startNewGame.focus();
    }
  }

  checkGuess(event) {
    event.preventDefault();
    let guessValue = event.target.guessNumber.value;
    let randomValue = this.state.randomNumber;
    event.target.guessNumber.value = "";

    if (guessValue !== "") {
      this.setState((prevState) => ({
        guesses:
          prevState.guesses === ""
            ? `Dosadašnji pokušaji: ${guessValue}`
            : `${prevState.guesses}, ${guessValue}`,
        guessCount: prevState.guessCount + 1,
      }));
      if (guessValue === randomValue) {
        this.setState({
          lastResult:
            "Čestitam, uspješno pogođen broj, u nastavku pročitaj zanimljivost o tom broju :)",
          lowOrHi: "",
          classLastResult: "m-2 p-1 bg-success",
          classButtonNewGame: "btn btn-primary m-2",
          correct: true,
        });

        this.submitGuess.setAttribute("disabled", "disabled");
        this.guessNumber.setAttribute("disabled", "disabled");
      } else if (this.state.guessCount === 10) {
        this.setState({
          lastResult:
            'Nema veze, pokušaj ponovo klikom na gumb "Započni novu igru"',
          lowOrHi: "",
          classLastResult: "m-2 p-1 bg-danger",
          classButtonNewGame: "btn btn-primary m-2",
        });

        this.submitGuess.setAttribute("disabled", "disabled");
        this.guessNumber.setAttribute("disabled", "disabled");
      } else if (guessValue > randomValue) {
        this.setState({
          lastResult: "Nažalost, krivo :(",
          lowOrHi: "Upisani broj je bio prevelik, pokušaj s manjim",
          classLastResult: "m-2 p-1 bg-danger",
        });
      } else if (guessValue < randomValue) {
        this.setState({
          lastResult: "Nažalost, krivo :(",
          lowOrHi: "Upisani broj je premalen, pokušaj s većim",
          classLastResult: "m-2 p-1 bg-danger",
        });
      }
    }
  }

  render() {
    return (
      <div className="container bg-warning text-dark">
        <form className="form-inline" onSubmit={this.checkGuess}>
          <label className="m-2">Upiši broj od 1 do 100:</label>
          <input
            name="guessNumber"
            type="number"
            min="1"
            max="100"
            ref={(input) => {
              this.guessNumber = input;
            }}
            className="form-control m-2"
          />
          <button
            type="submit"
            ref={(button) => {
              this.submitGuess = button;
            }}
            className="btn btn-primary m-2"
          >
            Provjeri
          </button>
        </form>
        <div>
          <p className="m-3">{this.state.guesses}</p>
          <p className={this.state.classLastResult}>{this.state.lastResult}</p>
          <p className="m-2">{this.state.lowOrHi}</p>
          <button
            ref={(button) => {
              this.startNewGame = button;
            }}
            className={this.state.classButtonNewGame}
            onClick={() => window.location.reload(false)}
          >
            Započni novu igru!
          </button>
        </div>
        {this.state.correct && <h3>{this.state.rewardtext}</h3>}
      </div>
    );
  }
}

export default NumbersGame;
