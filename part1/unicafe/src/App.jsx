import { useState } from 'react'

const Button = ({callback, text}) => <button onClick={callback}>{text}</button>

const StatisticTable = ({lines}) => (
  <table>
    <tbody>
      {lines.map(line => (<tr key={line.id}><td>{line.text}</td><td>{line.value}</td></tr>))}
    </tbody>
  </table>
)

const Statistics = ({good, neutral, bad}) => {
  const total = good+neutral+bad

  if (total === 0) return <p>No feedback given</p>

  const lines = [
    {text: ':)', value: good, id: 1},
    {text: ':l', value: neutral, id: 2},
    {text: ':(', value: bad, id: 3},
    {text: 'Total', value: total, id: 4},
    {text: 'Average', value: (good-bad)/total || 0, id: 5},
    {text: 'Positive', value: (good/total*100 || 0) + ' %', id: 6}
  ]

  return (
    <div>
      <h1>Stats!</h1>
      <StatisticTable lines={lines} />
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