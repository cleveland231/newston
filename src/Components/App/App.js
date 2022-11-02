import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { fetchStories, fetchOptionStories } from '../../fetch';
import filterOptions from '../../filterOptions';
import { Main } from '../Main/Main';
import './App.css';

const App = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    fetchStories().then((data) => {
      console.log(data.results)
      setStories(data.results)
    })
    // fetchOptionStories(option).then((data) => {
    //   console.log(data.results)
    // })
  }, [])

  const viewDropDown = () => {
    return filterOptions.map(option => {
      return (
        <option>{option}</option>
      )
    })
  }


  return (
    <div className="App">
      <div className='top'>
        <NavLink to="/">
          <h1>Newston</h1>
        </NavLink>

        <form className='filter'>
          <select>
          {viewDropDown()}
          </select>
          <button type='submit'> FILTER </button>
        </form>

      </div>
      <Main stories={stories}/>
    </div>
  );
}

export default App;
