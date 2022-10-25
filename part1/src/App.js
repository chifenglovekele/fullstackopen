import './App.css';
import { useState } from 'react'

// const Header = (props) => {
//   return (
//     <>
//       <h1>{props.course}</h1>
//     </>
//   )
// }

// const Content = (props) => {
//   console.log(props.content)
//   return (
//     <>
//       {
//         props.content.map((item) => {
//           return <p>{ item.part } {item.exercises}</p>
//         })
//       }
//     </>
//   )
// }

// const Total = (props) => {
//   return (
//     <>
//       <p>Number of exercises {props.total.exercises1 + props.total.exercises2 + props.total.exercises3}</p>
//     </>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//     <div>
//       <Header course={ course } />
//       <Content content={ [{part:part1, exercises:exercises1}, {part:part2, exercises:exercises2}, {part:part3, exercises:exercises3}] } />
//       <Total total={ {exercises1, exercises2, exercises3} } />
//     </div>
//   );
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )

//   console.log('rendering...', counter)

//   return (
//     <div>{counter}</div>
//   )
// }

// const Display = ({ counter }) => {
//   return (
//     <div>{counter}</div>
//   )
// }

// const Button = ({ onClick, text }) => {
//   return (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   )
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         onClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />
//       <Button
//         onClick={decreaseByOne}
//         text='minus'
//       />
//     </div>
//   )
// }



const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}


export default App;
