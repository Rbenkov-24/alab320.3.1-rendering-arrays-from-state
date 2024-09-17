

import Score from "./Score";
export default function Learner(learners) {
  return (
    <div>
      <h2>{learners.name}</h2>
      <p>{learners.bio}</p>
      {learners.scores.map((score, index) => (
        <Score key={index} date={score.date} score={score.score} />
      ))}
    </div>
  );
}
