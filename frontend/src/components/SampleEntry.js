import React from 'react';
import { Link } from 'react-router-dom';

const SampleEntry = ({ entry, index }) => {
  return (
    <Link to={`/sample/0`}>
      <div className='entry-container'>
        <div className='entry-row'>
          <h3 className='entry-name'>{entry.name}</h3>
          <p>{entry.roastDate}</p>
        </div>
        <div className='entry-row entry-row-last'>
          <p>{entry.roaster}</p>
          <Link className='entry-link' to={`/sample/0`}>
            View Entry
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default SampleEntry;
