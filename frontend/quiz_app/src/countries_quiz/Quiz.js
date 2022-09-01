import React from "react";
import { quizData } from "./quizData";
import './quiz_style.css';
import axios from "axios";



class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: false,
    isEnd: false,
    len : 0,
    question : "",
    correct : [],
    nickname: "",
  };

  

  loadQuizData = () => {
   // console.log(quizData.length())
  //  let leng = quizData[0].length;
  //  console.log(len)
   this.setState({
    len : quizData[0].length,  
  })
   Array(quizData[0]).map((el) => {
      el.map((rez) => {
       // console.log(rez)
        if(this.state.currentQuestion == rez.id) {
         // console.log("as" + rez.question);
          this.setState({
            question : rez.question,
            answer : rez.answer,
            options : rez.options,  
          })      
        }
      })
    })

     // console.log(result);
    //  options.push(result);
      // result.forEach(element => {
      //   this.setState(() => {
      //     console.log(element);
      //       return {
      //         questions: quizData[this.state.currentQuestion].question,
      //         answer: quizData[this.state.currentQuestion].answer,
      //         options: quizData[this.state.currentQuestion].options
      //       };
      // });
      // return {
      //   questions: quizData[this.state.currentQuestion].question,
      //   answer: quizData[this.state.currentQuestion].answer,
      //   options: quizData[this.state.currentQuestion].options
      // };

  //  })
    //console.log(quizData[0].question)
    // this.setState(() => {
    //   return {
    //     questions: quizData[this.state.currentQuestion].question,
    //     answer: quizData[this.state.currentQuestion].answer,
    //     options: quizData[this.state.currentQuestion].options
    //   };
    // });
 
  };
  
  componentDidMount() {
    
    this.loadQuizData();
  }


  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1,
      
      });
      this.state.correct.push(answer);
    }
   console.log(this.state.correct)


    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      disabled : false
    });
   // console.log(this.state.currentQuestion)
  
    this.loadQuizData();
   

    //console.log("ispod su info")
    //console.log(this.state.question)
    // console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      // this.setState(() => {
      //   return {
      //     disabled: true,
      //     questions: quizData[this.state.currentQuestion].question,
      //     options: quizData[this.state.currentQuestion].options,
      //     answer: quizData[this.state.currentQuestion].answer
      //   };
      // });
      this.loadQuizData();
    }
  }
  checkAnswer = answer => {
    console.log("answer check");
    this.setState({ myAnswer: answer, disabled: true });
    console.log(this.state.answer)
    console.log(this.state.disabled)
  };
  finishHandler = () => {
    if (this.state.currentQuestion === this.state.len) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  submitHandler = (e) => {
    const nickname = document.getElementById("nickname").value;
    e.preventDefault();
    console.log("IDEMO U SUBMIT");
     axios.post('http://localhost:8000/countryleaderboard/',
    {
      "Username": nickname,
      "Score": this.state.score
    }).then(function (response){
      console.log(response);
      // console.log("NICKNAME JE: " + this.state.nickname);
    }).catch(function(error) {
      console.log(error);
    })
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    if (isEnd) {
      return (
      
        <div className="result container text-dark">
          <h3>Igra je završena! Ostvareno bodova: {this.state.score} </h3>
          <div>
            Točni odgovori na postavljena pitanja bili su:
            <ul className="list-group sm">
              {quizData[0].map((item, index) => (
                <li className="list-group-item list-group-item-success" key={index}>
                  {/* {this.state.correct.map((element) => {
                        if(item.answer == element) {
                        }else {
                        }
                      })} */}
                  Q: {item.question}
                  <br></br>
                  A: {item.answer}
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <p>Sada upisi svoj nadimak kako bi unijeli tvoj rezultat u tablicu s bodovima. Nadimak treba sadržavati do 10 znakova</p>
              <input maxLength={10} type='text' className='form-control' id='nickname' placeholder="Nadimak" required></input>
            </div>
            <button type="submit" className='btn btn-success'>Upiši u tablicu</button>
          </form>
        </div>
      );
    } else {
      return (
        <body className="Quiz">
          {quizData != undefined && 
        <div className="Quiz text-dark">
          <h1>{this.state.question} </h1>
          <span>{`Pitanje ${this.state.currentQuestion + 1}  /  ${this.state.len } `}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}

         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {this.state.currentQuestion < this.state.len  && (
            <button
              className="btn btn-primary"
             disabled={!this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </button>
          )}
          {/* //adding a finish button */}
          
          {this.state.currentQuestion === this.state.len  && (
            <button className="btn btn-success" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
    }

        </body>
      );
    }
  }
}

export default Quiz;
