import React from "react";
import { useContext } from "react";

import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  // console.log(feedback);
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map(item => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
