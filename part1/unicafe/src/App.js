import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
   console.log(good);
   console.log(neutral);
   console.log(bad);
   if (good + neutral + bad == 0) {
      return (
         <div>
            <p>No feedback given</p>
         </div>
      );
   }
   return (
      <div>
         <table>
            <tbody>
               <StatisticLine text="good" value={good} />
               <StatisticLine text="neutral" value={neutral} />
               <StatisticLine text="bad" value={bad} />
               <StatisticLine text="all" value={good + neutral + bad} />
               <StatisticLine
                  text="average"
                  value={(good - bad) / (bad + neutral + good)}
               />
               <StatisticLine
                  text="positive"
                  value={(good / (bad + neutral + good)) * 100 + " %"}
               />
            </tbody>
         </table>
      </div>
   );
};

const Button = ({ handleClick, text }) => {
   return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
   return (
      <tr>
         <th align="left">{text}</th>
         <th align="left">{value}</th>
      </tr>
   );
};

const App = () => {
   // save clicks of each button to its own state
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);

   return (
      <div>
         <h1>give feedback</h1>
         <div>
            <Button handleClick={() => setGood(good + 1)} text="good" />
            <Button
               handleClick={() => setNeutral(neutral + 1)}
               text="neutral"
            />
            <Button handleClick={() => setBad(bad + 1)} text="bad" />
         </div>
         <h1>statistics</h1>
         <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
   );
};

export default App;
