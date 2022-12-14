import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const points = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
  let random = Math.random()
  console.log(random)
  let randomNum = Math.floor(anecdotes.length*random)
  const [selected, setSelected] = useState(0)
  const [pointData, setPoints] = useState(points)

  const handleSelecte = () => {
    console.log(randomNum)
    setSelected(randomNum)
  }

  const handlePoint = () => {
    const copy = { ...pointData }
    copy[selected] = copy[selected]+1
    console.log(copy)
    setPoints(copy)
  }

  let maxValue = 0
  let maxKey = 0
  for (let key in pointData) {
    if (pointData[key] > maxValue) {
        maxValue = pointData[key]
        maxKey = key
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>points: {pointData[selected]}</div>
      <button onClick={handlePoint}>vote</button>
      <button onClick={handleSelecte}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[maxKey]}</div>
      <div>has {pointData[maxKey]} votes</div>
    </div>
  )
}

export default App