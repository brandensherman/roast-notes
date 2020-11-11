import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { fetchEntryList } from '../reducers/entryListReducer';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const entryList = useSelector((state) => state.entryList);

  const { loading, error, userInfo } = user;
  const { entries } = entryList;

  useEffect(() => {
    dispatch(fetchEntryList());
  }, [dispatch]);

  return (
    <div className='container'>
      {loading ? (
        <Loader />
      ) : userInfo && entryList ? (
        <div>
          <h2>All Notes</h2>
          {entries.map((entry) => (
            <div className='entry-container' key={entry._id}>
              <h3>{entry.name}</h3>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <h1>Welcome to Roast Notes</h1>
      )}
    </div>
  );
};

export default HomeScreen;
