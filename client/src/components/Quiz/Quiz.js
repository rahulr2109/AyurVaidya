import React, { useState } from "react";
import { QuizData } from "./Data";
import QuizResult from "./QuizResult";
import "./Quiz.css";
import { Box, Container } from "@mui/material";
import Navbar from "../Navbar";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [vata, setVata] = useState(0);
  const [pitta, setPitta] = useState(0);
  const [kapha, setKapha] = useState(0);
  const [ans, setAns] = useState("");
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  var q = ["vata", "Pitta", "Kapha"];
  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      if (vata > pitta && vata > kapha) {
        setAns("Vata");
      } else if (pitta > vata && pitta > kapha) {
        setAns("Pitta");
      } else if (kapha > pitta && kapha > vata) {
        setAns("Kapha");
      } else {
        // setAns("Vata");
        if (vata < pitta && pitta == kapha) {
          setAns("Pitta and Kapha");
        } else if (kapha < pitta && vata == pitta) {
          setAns("Vata and Pitta");
        } else if (pitta < vata && vata == kapha) {
          setAns("Vata and Kapha");
        } else {
          setAns("Vata and Pitta and Kapha");
        }
      }
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === 1) {
      setVata(vata + 1);
    } else if (clickedOption === 2) {
      setPitta(pitta + 1);
    } else if (clickedOption === 3) {
      setKapha(kapha + 1);
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };
  return (
    <>
      {showResult ? (
        <QuizResult
          score={ans}
          // totalScore={QuizData.length}
          tryAgain={resetAll}
        />
      ) : (
        <Container>
          <Navbar />

          <Box
            sx={{
              height: "85vh",
              width: "100%",
              border: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2E4450",
              opacity: "0.5",
              borderRadius: "10px",
            }}
          >
            <div className="container">
              <div className="image-container">
                <img
                  src="https://www.drshikhasharma.com/wp-content/uploads/2019/01/08b5e14c-c65d-48eb-afd7-197b072a5eb4.jpg"
                  alt="Quiz Image"
                  className="quiz-image"
                />
              </div>

              <>
                <div className="question">
                  <span id="question-number">{currentQuestion + 1}. </span>
                  <span id="question-txt">{QuizData[currentQuestion].Q}</span>
                </div>
                <div className="option-container">
                  {QuizData[currentQuestion].C.map((option, i) => {
                    return (
                      <button
                        // className="option-btn"
                        className={`option-btn ${clickedOption == i + 1 ? "checked" : null
                          }`}
                        key={i}
                        onClick={() => setClickedOption(i + 1)}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                <input
                  type="button"
                  value="Next"
                  id="next-button"
                  onClick={changeQuestion}
                />
              </>
            </div>
          </Box>
        </Container>
      )}
    </>
  );
}

export default Quiz;
