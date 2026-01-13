import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good+neutral+bad

  return (
    <div>
      <h1>Give feedback!</h1>
      <p>
        <button onClick={() => setGood(good+1)}>
          Good!
        </button>
        <button onClick={() => setNeutral(neutral+1)}>
          Neutral..
        </button>
        <button onClick={() => setBad(bad+1)}>
          Bad...........
        </button>
      </p>
      <h1>Stats!</h1>
      <p>:) {good}</p>
      <p>:l {neutral}</p>
      <p>:( {bad}</p>
      <p>Total feedback: {total}</p>
      <p>Average: {(good-bad)/total || 0}</p>
      <p>Positive: {good/total*100 || 0}%</p>
    </div>
  )
}

export default App