import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

export const Main = ({ stories }) => {

  const renderStories = () => {
    return stories.map(story => {
      return (
        <li key={story.title}>
          <Link to={`story/${story.title}`}>
            {story.title ? <h2 className='storiesTitle'> {story.title} </h2> : <h2>Error</h2>}
          </Link>
          {story.abstract ? <p className='storiesAbstract'> {story.abstract} </p> : <p>Error</p>}
        </li>
      )
    })
  }

  return (
    <div className='main'>
      <ul>
        {renderStories()}
      </ul>
    </div>
  )
}
