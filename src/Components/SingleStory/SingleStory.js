import React from 'react'
import './SingleStory.css'

export const SingleStory = ({ details }) => {
  return (
    <div className='singleStory'>
      {<h2>{details.title}</h2>}
      <h3>{details.byline}</h3>
      <img src={details.multimedia[0].url} alt='story' />
      <h3>{details.created_date}</h3>
      <h3>{details.abstract}</h3>
      <a href={details.url} className='link'> THE NEW YORK TIMES STORY </a>
    </div>
  )
}
