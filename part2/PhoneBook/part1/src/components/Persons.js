import React from 'react';

const Persons = ({person}) => {
    return (
      <li>
          {person.name} {person.phone}
      </li>
    )
  }

export default Persons