import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({clickEvent,text}) => {
  
  return (
    <div style = {{float:'left'}}>
      <button onClick = {clickEvent}>{text}</button>
    </div>
  )
}

const Statistics = (props) => {
  const {good,neutral,bad,all,average,positive} = props
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
      <h3>No feedback given</h3>
    </div>
    )
  }else {
    return (
      <div>
        <table>
          <Statistic text = 'good' value = {good}/>
          <Statistic text = 'neutral' value = {neutral} />
          <Statistic text = 'bad' value = {bad} />
          <Statistic text = 'all' value = {all} />
          <Statistic text = 'average' value = {average} />
          <Statistic text = 'positive' value = {positive} />
        </table>
      </div>
    )
  }
}
const Statistic = ({text, value}) => {
  return (
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button clickEvent = {() => {setGood(good + 1)}} text = {'good'} />
      <Button clickEvent = {() => {setNeutral(neutral + 1)}} text = {'neutral'} />
      <Button clickEvent = {() => {setBad(bad + 1)}} text = {'bad'} /><br/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} 
      all = {all} average = { (good - bad)/all} 
      positive = {((good/all)/100+' %')}/>
    </div>
  )
}

ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

