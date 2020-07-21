import React from 'react';

const Filter = ({searchText,changeSearch}) => {


    return (
        <div>
          <h2>Filter</h2>
        <div>
          filter shown with <input value = {searchText} onChange={changeSearch}/>
        </div>
        </div>
    )
}

export default Filter