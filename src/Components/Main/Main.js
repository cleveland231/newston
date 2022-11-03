import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

export const Main = ({stories}) => {

  const renderStories = () => {
    return stories.map(story => {
      return(
        <li>
        <Link to={`story/${story.title}`}>
          <h2 className='storiesTitle'> {story.title} </h2>
        </Link>
          <h3 className='storiesAbstract'> {story.abstract} </h3>
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
