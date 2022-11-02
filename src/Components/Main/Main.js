import React from 'react'
import './Main.css'

export const Main = ({stories}) => {

  const renderStories = () => {
    return stories.map(story => {
      return(
        <li>
          <h2 className='storiesTitle'> {story.title} </h2>
          <h3 className='storiesAbstract'> {story.abstract} </h3>
          <button> VIEW STORY </button>
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
