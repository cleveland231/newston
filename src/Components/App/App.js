import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink, useLocation } from 'react-router-dom'
import { fetchStories, fetchOptionStories } from '../../fetch';
import filterOptions from '../../filterOptions';
import { Main } from '../Main/Main';
import { SingleStory } from '../SingleStory/SingleStory';
import './App.css';

const App = () => {
  const [stories, setStories] = useState([])
  const [selectOption, setSelectOption] = useState('')
  const location = useLocation()

  useEffect(() => {
    fetchStories().then((data) => {
      console.log(data.results)
      setStories(data.results)
    })
  }, [])

  useEffect(() => {
    fetchOptionStories(selectOption)
      .then((data) => {
        console.log(data.results)
        setStories(data.results)
      })
  }, [selectOption])

  const viewDropDown = () => {
    return filterOptions.map(option => {
      return (
        <option className="optionList" key={option} value={option}>{option}</option>
      )
    })
  }

  const handleClick = (event) => {
    setSelectOption(event.target.value)
  }

  return (
    <div className="App">
      <div className='top'>
        <NavLink to="/">
          <h1 className='newstonTitle'>Newston</h1>
        </NavLink>
        {location.pathname === "/" && <form className='filter'>
          <select
            className="options"
            value={selectOption}
            onChange={(event) => handleClick(event)}
          >
            <option value="home">Topics...</option>
            {viewDropDown()}
          </select>
        </form>}
      </div>
      <Switch>
        <Route exact path="/" render={() => <Main stories={stories} />} />
        <Route exact path="/story/:id" render={({ match }) => {
          const details = stories.find(story => story.title === match.params.id)
          return <SingleStory stories={stories} details={details} />
        }} />
        <Route render={() => <h2 className='appMessage'> This Path Does Not Exist! </h2>} />
      </Switch>
    </div>
  );
}

export default App;
