import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const MostVote = ({voteStatistic,anecdotes}) => {
  const props = () => {
    let max = 0
    let j = -1
    for(let i = 0; i < voteStatistic.length; i++){
      if(voteStatistic[i] >= max){
        max = voteStatistic[i]
        j = i
      }
    }
    return [max,j]
  }
  console.log('props',props())
  if(props()[0] === 0){
    return (
      <div>
        nothing to show here, plese vote
      </div>
    )
  }else{
    return(
      <div>
        <p>{anecdotes[props()[1]]}</p>
        <p>has {props()[0]} votes</p>
      </div>
    )
  }
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voteStatistic,seVotetStatistic] = useState([0,0,0,0,0,0])
  console.log(selected)
  const voteCopy = [...voteStatistic]
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br/>
      <p>has {voteStatistic[selected]} votes</p>
      <button onClick = {() => {
        setSelected(Math.floor(Math.random()*6));
      }}>next anecdote</button>
      <button onClick = {() => {
        voteCopy[selected] += 1
        seVotetStatistic(voteCopy)
      }}>vote
      </button>
      <h1>Anecdote with most votes</h1>
      <MostVote voteStatistic = {voteCopy} anecdotes={anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

