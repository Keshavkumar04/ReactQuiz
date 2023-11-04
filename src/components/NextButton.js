function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  // Here we dont need any data to be passsed therefore here is no payload
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  // case when the user is on the last question
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
