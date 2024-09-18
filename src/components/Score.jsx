/* eslint-disable react/prop-types */
export default function Score(props) {
  return (
    <div>
      <p>Date: {props.scores.date}</p>
      <p>Score: {props.scores.score}</p>
    </div>
  );
}

