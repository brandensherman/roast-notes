import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchEntryDetails,
  deleteEntry,
} from '../reducers/entryDetailsReducer';

const EntryScreen = ({ match }) => {
  const dispatch = useDispatch();

  const entryDetails = useSelector((state) => state.entryDetails);

  // const { entry } = entryDetails;
  const {
    name,
    roaster,
    roastDate,
    description,
    varietal,
    brewMethod,
    rating,
  } = entryDetails.entry;

  useEffect(() => {
    dispatch(fetchEntryDetails(match.params.id));
  }, [dispatch, match]);

  const handleDelete = () => {
    dispatch(deleteEntry(match.params.id));
  };

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
            <div className='btn btn-back btn-delete' onClick={handleDelete}>
              Delete
            </div>
          </Link>
          <Link to='/'>
            <div className='btn btn-back'>Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EntryScreen;
