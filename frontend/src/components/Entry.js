import React from 'react'
import { Link } from 'react-router-dom'

const Entry = ({ entry }) => {
  return (
    <div className='entry-container'>
      <div className='entry-row'>
        <h3 className='entry-name'>{entry.name}</h3>
        <p>{entry.roastDate}</p>
      </div>
      <div className='entry-row entry-row-last'>
        <p>{entry.roaster}</p>
        <Link className='entry-link' to={`/entry/${entry._id}`}>
          View Entry
        </Link>
      </div>
    </div>
  )
}

export default Entry
