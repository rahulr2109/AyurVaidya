import React from "react";

function QuizResult(props) {
  return (
    <>
      <div className="show-score">
        Your Prakriti
        <br />
        {props.score}
      </div>
      <button id="next-button" onClick={props.tryAgain}>
        Try Again
      </button>
    </>
  );
}

export default QuizResult;
