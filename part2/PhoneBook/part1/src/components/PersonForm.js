import React from 'react';

const PersonForm = (prop) => {
    return (
      <div>
        <h2>add a new</h2>
        <form onSubmit={prop.addName}> 
          <div>
            name: <input value = {prop.newName} onChange={prop.changeName}/>
          </div>
          <div>number: <input value = {prop.newPhone} onChange = {prop.changePhone}/></div>
          <div>
            <button type="submit" >add</button>
          </div>
        </form>
      </div>
    )
  }


  export default PersonForm