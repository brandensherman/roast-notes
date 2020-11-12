import React from 'react';

import { Link } from 'react-router-dom';
import sampleEntries from '../data/sampleEntries';

const SampleEntryScreen = () => {
  let entry = sampleEntries[0];

  const {
    name,
    roaster,
    roastDate,
    description,
    varietal,
    brewMethod,
    rating,
  } = entry;
  return (
    <div className='container'>
      <div className='entry-screen-container'>
        <h3>{name}</h3>
        <p>
          <strong>Roast Date:</strong> {roastDate}
        </p>
        <p>
          <strong>Roaster:</strong> {roaster}
        </p>
        <p>
          <strong>Notes:</strong> {description}
        </p>
        <p>
          <strong>Varietal:</strong> {varietal}
        </p>
        <p>
          <strong>Brew Method:</strong> {brewMethod}
        </p>
        <p>
          <strong>Rating:</strong> {rating}
        </p>

        <div className='entry-buttons'>
          <Link to='/'>
            <div className='btn btn-back'>Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SampleEntryScreen;
