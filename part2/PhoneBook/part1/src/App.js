import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from "./components/PersonForm";
import Persons from './components/Persons'
import { getAll, create, deleteById, updateData } from './components/GetData'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState(false)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    getAll().then(data => {
      setPersons(data)
    })
  }, [])

  const changeSearch = (event) => {
    setSearchText(event.target.value)
    if (event.target.value.length === 0) {
      setSearch(false)
    } else {
      setSearch(true)
    }
  }


  const personsAFFilter = !search ? persons : persons.filter(person => {
    return person.name.toLowerCase().match(searchText) !== null || person.number.match(searchText) !== null
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
      number: newPhone,
      id: persons.length + 1
    }
    console.log("id", addNewName.id)
    for (var person of persons) {
      if (person.name === newName) {
        if (window.confirm(`${newName} is already added to Phonebook, replace the old number with new one`)) {
          addNewName.id = person.id
          updateData(person.id, addNewName)
          setPersons(persons.map(p => p.id !== person.id ? p : addNewName))
          setNewName('')
          setNewPhone('')
        }
        return
      }
    }
    setPersons(persons.concat(addNewName))
    create(addNewName)
    setNewName('')
    setNewPhone('')
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      deleteById(id)
      setPersons(persons.filter(person => person.id != id))
    }
  }

  return (
    <div>
      <Filter searchText={searchText} changeSearch={changeSearch} />
      <h2>Phonebook</h2>
      <PersonForm addName={addName} newName={newName} changeName={changeName}
        newPhone={newPhone} changePhone={changePhone} />
      <div>debug:newName {newName}</div>
      <div>debug:newPhone {newPhone}</div>
      <div>debug:searchText {searchText}</div>

      <h2>Numbers</h2>
      <ul>
        {personsAFFilter.map(person =>
          <Persons key={person.id} person={person} deletePerson={deletePerson} />
        )}
      </ul>
    </div>
  )
}

export default App;
