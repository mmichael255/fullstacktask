import React, {useState}from 'react';
import Filter from './components/Filter';
import PersonForm from "./components/PersonForm";
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ search, setSearch ] = useState(false)
  const [ searchText, setSearchText ] = useState('')

  const changeSearch = (event) => {
    setSearchText(event.target.value)
    console.log(event.target.value)
    if(event.target.value.length === 0){
      setSearch(false)
    }else{
      setSearch(true)
    }
  }
  

  const personsAFFilter = !search?persons:persons.filter(person => {
    console.log('filterName',person.name.toLowerCase())
    console.log('filterPhone',person.phone.match(searchText) !== null)
    return person.name.toLowerCase().match(searchText) !== null || person.phone.match(searchText) !== null
  })
  const changeName = (event) => { 
    setNewName(event.target.value)
  }

  const changePhone = (event) => { 
    setNewPhone(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    let addNewName = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    }
    persons.forEach(function(person,i){

      if(person.name === newName){
        alert(`${newName} is already added to phonebook`)
      }else{
        setPersons(persons.concat(addNewName))
        setNewName('')
        setNewPhone('')
      }
    })
  }


  return (
    <div>
      <Filter searchText = {searchText} changeSearch={changeSearch}/>
      <h2>Phonebook</h2>
      <PersonForm addName = {addName} newName = {newName} changeName = {changeName} 
                  newPhone = {newPhone} changePhone = {changePhone}/>
      <div>debug:newName {newName}</div>
      <div>debug:newPhone {newPhone}</div>
      <div>debug:searchText {searchText}</div>

      <h2>Numbers</h2>
      <ul>
        {personsAFFilter.map(person => 
          <Persons key = {person.id} person = {person}/>
        )}
      </ul>
    </div>
  )
}

export default App;
