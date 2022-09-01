import React, { Component } from "react";
import countriesPic from "../images/countries.jpg";
import puzzlePic from "../images/sliding_puzzle.png";
import pileofnumbers from "../images/pileofnumbers.jpg";
import memorygame from "../images/memorypic.jpg";
import hangmanpic from "../images/hangman.png";

class GameChoice extends Component {

  render() {
    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="card">
                <img
                  alt="Sliding puzzle"
                  class="card-img-top "
                  src={puzzlePic}
                />
                <div class="card-body text-primary">
                  <h6 class="card-title">Slagalica</h6>
                  <p class="card-text text-body">
                    Pokušaj složiti slagalicu, ako je uspiješ složiti, otkrit
                    ćeš zanimljivu činjenicu
                  </p>
                  <a href="slidingpuzzle/" class="btn btn-primary">
                    Igraj sada!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <img alt="Countries" class="card-img-top " src={countriesPic} />
                <div class="card-body text-primary">
                  <h6 class="card-title">Glavni gradovi svijeta</h6>
                  <p class="card-text text-body">
                    Provjeri svoje znanje o glavnim gradovima svijeta.
                  </p>
                  <a href="countriesquiz/" class="btn btn-primary">
                    Igraj sada!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <img
                  alt="Countries"
                  class="card-img-top "
                  src={pileofnumbers}
                />
                <div class="card-body text-primary">
                  <h6 class="card-title">Igra pogađanja</h6>
                  <p class="card-text text-body">
                    U ovoj igri pokušaj pogoditi nasumično odabrani broj te
                    saznaj zanimljivost vezanu za taj broj
                  </p>
                  <a href="numbersgame/" class="btn btn-primary">
                    Igraj sada!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div class="col-sm-3">
            <div class="card">
              <img alt="Sliding puzzle" class="card-img-top " src={memorygame} />
              <div class="card-body text-primary">
                <h6 class="card-title">Wiki Memory</h6>
                <p class="card-text text-body">
                 Klasična igra memoryja, ali kada uspiješ složiti par saznat češ što se krije pod slikom
                </p>
                <a href="memory/" class="btn btn-primary">
                  Igraj sada!
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img alt="Sliding puzzle" class="card-img-top " src={hangmanpic} />
              <div class="card-body text-primary">
                <h6 class="card-title">Wiki Vješala</h6>
                <p class="card-text text-body">
                 Pokušaj otkriti o kojem je izrazu riječ te kada uspiješ pročitaj zanimljiv članak s Wikipedije
                </p>
                <a href="hangman/" class="btn btn-primary">
                  Igraj sada!
                </a>
              </div>
            </div>
          </div>
          </div>

        </div>
      </>
    );
  }
}

export default GameChoice;
