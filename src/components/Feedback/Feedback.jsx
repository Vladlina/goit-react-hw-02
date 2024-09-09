import css from "../Feedback/Feedback.module.css";

export default function Feedback({ feedback: { good, neutral, bad }, total, positivePercentage }) {
  return (
    <div className={css.container}>
      <p className={css.stat}>Good: {good}</p>
      <p className={css.stat}>Neutral: {neutral}</p>
      <p className={css.stat}>Bad: {bad}</p>
      <p className={css.text}>Total: {total}</p>
      <p className={css.text}>Positive: {positivePercentage}%</p>
    </div>
  );
}