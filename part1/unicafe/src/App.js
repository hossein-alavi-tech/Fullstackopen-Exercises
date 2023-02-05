import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <h3>No feedback given</h3>;
  } else {
    return (
      <div>
        <StatisticLine text="good" number={good} />
        <StatisticLine text="neutral" number={neutral} />
        <StatisticLine text="bad" number={bad} />
        <StatisticLine text="all" number={good + neutral + bad} />
        <StatisticLine
          text="average"
          number={(good - bad) / (good + neutral + bad)}
        />
        <StatisticLine
          text="positive"
          number={(good * 100) / (good + neutral + bad)}
        />
      </div>
    );
  }
};

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;
const StatisticLine = ({ text, number }) => {
  if (text === "positive")
    return (
      <p>
        {text} {number}%
      </p>
    );
  else
    return (
      <p>
        {text} {number}
      </p>
    );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="App">
      <h3>Give Feedback!</h3>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <h3>Statistics:</h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
