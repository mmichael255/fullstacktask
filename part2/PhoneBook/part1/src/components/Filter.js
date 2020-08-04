import React from 'react';

const Filter = ({searchText,changeSearch}) => {


    return (
        <div>
          filter shown with <input value = {searchText} onChange={changeSearch}/>
        </div>
    )
}

export default Filter