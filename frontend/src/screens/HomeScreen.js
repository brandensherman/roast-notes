import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Entry from '../components/Entry'
import { fetchEntryList } from '../reducers/entryListReducer'

// import sampleEntries from '../data/sampleEntries'
// import SampleEntry from '../components/SampleEntry'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)
  const entryList = useSelector((state) => state.entryList)

  const { loading, error, userInfo } = user
  const { entries } = entryList

  useEffect(() => {
    if (userInfo) {
      dispatch(fetchEntryList())
    }
  }, [dispatch, userInfo])

  return (
    <div className='container'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message> {error}</Message>
      ) : userInfo && entryList ? (
        <div className='entry-list-container'>
          <h2 className='entry-list-title'>All Entries</h2>
          {entries ? (
            entries.map((entry) => <Entry entry={entry} key={entry._id} />)
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div className='home-container'>
          <h2>Welcome!</h2>
          <p className='home-description'>
            Roast Notes is a coffee journal application that allows users to
            develop their palate by taking notes on the coffees they drink.
          </p>
          {/* <h3>Sample Entry</h3>
          {sampleEntries.map((entry, index) => (
            <SampleEntry entry={entry} key={index} index={index} />
          ))} */}
        </div>
      )}
    </div>
  )
}

export default HomeScreen
