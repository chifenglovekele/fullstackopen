import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'

const Filter = (porps) => {
  return (
    <div>
      filter shown with <input value={porps.value} onChange={porps.handleFilterChange}/>
    </div>
  )
}

const PersonForm = (porps) => {
  return (
    <form onSubmit={porps.handlePersonAdd}>
      <div>
        name: <input value={porps.newName} onChange={porps.handleNameChange} />
      </div>
      <div>
        phone: <input value={porps.newPhone} onChange={porps.handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

// const Persons = (props) => {
//   return (
//     <>
//       {
//         props.filterPersons.map((person, i) =>{
//           return <div key={person.name}>{person.name} {person.phone}</div>;
//         })
//       }
//     </>
//   )
// }

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterName, setFilterName] = useState('')
  const [filterPersons, setFilterPersons] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3004/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
      setFilterPersons(response.data)
    })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterName(event.target.value)
    handleFilterPersons(persons, event.target.value)
  }

  const handleFilterPersons = (persons, name) => {
    if (!name) {
      setFilterPersons([...persons])
    } else {
      console.log(persons.filter(person => person.name.indexOf(name)>-1))
      setFilterPersons(persons.filter(person => person.name.indexOf(name)>-1))
    }
  }

  const handlePersonAdd = (event) => {
    event.preventDefault()
    if(hasName(persons, newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObj = {
        name: newName,
        phone: newPhone
      }
      console.log(personObj)
      setPersons(persons.concat(personObj))
      handleFilterPersons(persons.concat(personObj), filterName)
      console.log(persons.concat(personObj))
    }
    setNewName('')
    setNewPhone('')
  }

  const hasName = (arr, name) => {
    let flag = false
    arr.forEach(element => {
      if(element.name === name) {
        flag = true
      }
    });
    return flag
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>
        filter shown with <input value={filterName} onChange={handleFilterChange}/>
      </div> */}
      <Filter value={filterName} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      {/* <form onSubmit={handlePersonAdd}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}
      <PersonForm handlePersonAdd={handlePersonAdd} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} newName={newName} newPhone={newPhone} />
      <h2>Numbers</h2>
      {/* {
        filterPersons.map((person, i) =>{
          return <div key={person.id}>{person.name} {person.phone}</div>;
        })
      } */}
      <Persons filterPersons={filterPersons} />
    </div>
  )
}

export default App