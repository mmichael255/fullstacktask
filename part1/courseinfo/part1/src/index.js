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
       <Part part = {props.part[0].name} exercises = {props.part[0].exercises}/>
       <Part part = {props.part[1].name} exercises = {props.part[1].exercises}/>
       <Part part = {props.part[2].name} exercises = {props.part[2].exercises}/>
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
      Number of exercises  {props.num[0].exercises + props.num[1].exercises + props.num[2].exercises }
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
         name: 'Using props to pass data',
         exercises: 7
               },
      {
         name: 'State of a component',
         exercises: 14
       }
    ]
}

  return (
    <div>
      <Head course = {course.name}/>
      <Content part = {course.parts} />
      <Total num = {course.parts}/>
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
