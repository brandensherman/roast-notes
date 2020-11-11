import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Entry from '../components/Entry';
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
    <div className='home-container'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message> {error}</Message>
      ) : userInfo && entryList ? (
        <div className='entry-list-container'>
          <h2>All Notes</h2>
          {entries.map((entry) => (
            <Entry entry={entry} key={entry._id} />
          ))}
        </div>
      ) : (
        <h1 className='welcome-title'>Welcome to Roast Notes</h1>
      )}
    </div>
  );
};

export default HomeScreen;
