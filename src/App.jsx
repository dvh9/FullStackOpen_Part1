import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}


const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let average = (props.good - props.bad) / all
  let positive = (props.good / all) * 100 + "%"

  if (all === 0) {
    return(
      <div>
        <p>no feeback given</p>
      </div>)
  } else return(
    <table>
      <tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  )
}
const App = () => {
  const anecdotes = ['If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.']
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])
  const quote = anecdotes[selected]
  console.log(votes)
  const highest = Math.max(...votes)
  const highestIndex = votes.indexOf(highest)
  const topQuote = anecdotes[highestIndex]

  return (
    <div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad +1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />

      <p></p>
      <h1>Anecdote</h1>
      <p>{quote}</p>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Next anecdote</button>
      <button onClick={() => setVotes(
        votes.map((vote, index) => {
          if (index === selected) {
            return vote + 1
          } else {
            return vote
          }
          })
      )}>Vote</button>
      <h2>Anecdote with the most votes</h2>
      <p>{topQuote}</p>




    </div>
  )
}


export default App
