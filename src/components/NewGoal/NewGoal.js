import React from "react";

import "./NewGoal.css";

const NewGoal = () => {
  const addGoalHandler = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Math.floor(Math.random() * 10000000).toString(),
      text: "My new goal",
    };

    console.log(newGoal);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
