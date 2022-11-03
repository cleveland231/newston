import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { fetchStories, fetchOptionStories } from '../../fetch';
import filterOptions from '../../filterOptions';
import { Main } from '../Main/Main';
import { SingleStory } from '../SingleStory/SingleStory';
import './App.css';

const App = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    // fetchStories().then((data) => {
    //   console.log(data.results)
    //   setStories(data.results)
    // })
    fetchOptionStories('home')
      .then((data) => {
        console.log(data.results)
        setStories(data.results)
      })
  }, [])

  const viewDropDown = () => {
    return filterOptions.map(option => {
      return (
        <option value={'option'}>{option}</option>
      )
    })
  }

  const handleClick = (event) => {
    event.preventDefault()
    setStories([])
    fetchOptionStories(event.target.value).then((data) => {
      console.log(data.results)
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
          <button type='submit' onClick={(event) => handleClick(event)}> FILTER </button>
        </form>

      </div>
      <Switch>

        <Route exact path="/" render={() => <Main stories={stories} /> }/>
        <Route exact path="/story/:id" render={({match}) => {
          const details = stories.find(story => story.title === match.params.id) 
            return <SingleStory stories={stories} details={details}/> 
        }}
        />

        <Route render={() => <h2>This Path Does Not Exist!</h2>} />
      </Switch>
    </div>
  );
}

export default App;
