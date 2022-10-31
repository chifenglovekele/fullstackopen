import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

const CountryInfo = ({country, isShow}) => {
  let arr = []
  for(let key in country.languages) {
    arr.push(country.languages[key])
  }
  return (
    <div className={isShow ? 'showClass':'noneClass'}>
      <h1>{ country.name.common }</h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h3>languages:</h3>
      <ul>
        {
          arr.map(item => <li key={item}>{item}</li>)
        }
      </ul>
      <img src={country.flags.png} alt='国旗'></img>
    </div>
  )
}

const CountryOne = ({country}) => {
  const [isShow, setIsShow] = useState(false)
  const handleShowCountryInfo = () => {
    setIsShow(!isShow)
  }
  return (
    <div>
      <span key={country.name.common}>{country.name.common}</span>
      <button onClick={handleShowCountryInfo}>show</button>
      <CountryInfo isShow={isShow} country={country}/>
    </div>
  )
}

const CountryNameList = ({filterCountries}) => {
  return (
    <>
      {
        filterCountries.map((country, i) =>{
          return (
            <CountryOne key={country.name.common} country={country} />
          )
        })
      }
    </>
  )
}


const CountryList = ({filterCountries}) => {
  let countryNum = filterCountries.length
  if(countryNum>10) {
    return (<div>Too many matches,specify another filter</div>)
  } else if (countryNum>1 && countryNum<11) {
    return (
      <CountryNameList filterCountries={filterCountries} />
    )
  } else if (countryNum === 1) {
    let country = filterCountries[0]
    return (
      <>
        <CountryInfo isShow={true} country={country} />
      </>
    )
  }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState('')
  const [filterCountries, setFilterCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      console.log(response)
      setCountries(response.data)
      setFilterCountries(response.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setCountryName(event.target.value)
    handleFilterCountries(countries, event.target.value)
  }

  const handleFilterCountries = (countries, name) => {
    if (!name) {
      setFilterCountries([...countries])
    } else {
      console.log(countries.filter(country => country.name.common.indexOf(name)>-1))
      setFilterCountries(countries.filter(country => country.name.common.indexOf(name)>-1))
    }
  }

  return (
    <div>
      <div>
        find countries <input value={countryName} onChange={handleFilterChange}/>
      </div>
      <CountryList filterCountries={filterCountries} />
    </div>
  )
}

export default App