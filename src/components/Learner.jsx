
/* eslint-disable react/prop-types */
import Score from "./Score";
export default function Learner(props) {
  return (
    <div>
      <h2>{props.learners.name}</h2>
      <p>{props.learners.bio}</p>
      {props.learners.scores.map((score, index) => (
        <Score key={index}  scores={score} />
      ))}
    </div>
  );
}

    