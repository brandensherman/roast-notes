import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEntryDetails } from '../reducers/entryDetailsReducer';

const EntryScreen = ({ match }) => {
  const dispatch = useDispatch();

  const entryDetails = useSelector((state) => state.entryDetails);

  const { entry } = entryDetails;
  useEffect(() => {
    dispatch(fetchEntryDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div className='entry-screen-container'>
      <Link className='' to='/'>
        Go Back
      </Link>
      <h3 className='entry-name'>{entry.name}</h3>
      <h4>{entry.roaster}</h4>
      <p>{entry.roastDate}</p>
      <p>{entry.description}</p>
      <p>{entry.varietal}</p>
      <p>{entry.brewMethod}</p>
      <p>{entry.rating}</p>
    </div>
  );
};

export default EntryScreen;
