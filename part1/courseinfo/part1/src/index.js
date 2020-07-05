import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
const Head = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part[0]} exercises = {props.exercises[0]}/>
      <Part part = {props.part[1]} exercises = {props.exercises[1]}/>
      <Part part = {props.part[2]} exercises = {props.exercises[2]}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
      Number of exercises  {props.num}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = ['Fundamentals of React','Using props to pass data',
  'State of a component']
  const exercises = [10,7,14]
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
      <Head course = {course}/>
      <Content part = {part} exercises = {exercises}/>
      
      <Total num = {exercises[0] + exercises[1] +exercises[2]}/>
    </div>
  )
}


ReactDOM.render(
  
   <App />,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
