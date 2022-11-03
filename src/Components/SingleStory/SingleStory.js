import React from 'react'
import './SingleStory.css'

export const SingleStory = ({details}) => {
  return (
    <div className='singleStory'>
      <h2>{details.title}</h2>
      <img src={details.multimedia[0].url} alt='story'/>
    </div>
  )
}
