import React from 'react';
import { Link } from 'react-router-dom';

const Entry = ({ entry }) => {
  return (
    <Link to={`/entry/${entry._id}`} className='entry-container'>
      <h3 className='entry-name'>{entry.name}</h3>
      <h4>{entry.roaster}</h4>
      <p>{entry.roastDate}</p>
    </Link>
  );
};

export default Entry;
