import React, { useState } from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Math.floor(Math.random() * 10000000).toString(),
      text: enteredText,
    };

    props.onAddGoal(newGoal);
    setEnteredText("");
  };

  const textChangeHandler = (e) => {
    setEnteredText(e.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
