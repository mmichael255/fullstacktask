import React from 'react';


const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }
  
  const Total = ({ parts }) => {
    
    const exercisesNum =  parts.map(part => {return part.exercises})
  
    
    const sum = exercisesNum.reduce((s,p) => {
      return s + p
    })
    
    return(
      <p><h3>Number of exercises {sum}</h3></p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        
        {parts.map((part) => 
          <Part key = {part.id} parts={part} />
        )}
        
      </div>
    )
  }
  
const Course = ({course}) => {

    return (
      <div>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total parts={course.parts} />
      </div>
    )
  }

export default Course