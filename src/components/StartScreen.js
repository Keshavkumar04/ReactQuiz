function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The react quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })} // After the button is clicked the status is set to active/start
      >
        Let's Start{" "}
      </button>
    </div>
  );
}

export default StartScreen;
