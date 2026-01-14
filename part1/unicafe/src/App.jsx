import { useState } from 'react'

const Button = ({callback, text}) => <button onClick={callback}>{text}</button>

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad}) => {
  const total = good+neutral+bad

  if (total === 0) return <p>No feedback given</p>

  return (
    <div>
      <h1>Stats!</h1>
      <StatisticLine text={':)'} value={good} />
      <StatisticLine text={':l'} value={neutral} />
      <StatisticLine text={':('} value={bad} />
      <StatisticLine text={'Total feedback'} value={total} />
      <StatisticLine text={'Average'} value={(good-bad)/total || 0} />
      <StatisticLine text={'Positive'} value={good/total*100 || 0} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good+neutral+bad

  return (
    <div>
      <h1>Give feedback!</h1>
      <p>
        <Button callback={() => setGood(good+1)} text={'Good!'} />
        <Button callback={() => setNeutral(neutral+1)} text={'Neutral..'} />
        <Button callback={() => setBad(bad+1)} text={'Bad...........'} />
      </p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App