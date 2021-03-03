import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEntry } from '../reducers/entryListReducer'

const CreateEntry = ({ location, history }) => {
  const [name, setName] = useState('')
  const [roaster, setRoaster] = useState('')
  const [roastDate, setRoastDate] = useState('')
  const [description, setDescription] = useState('')
  const [brewMethod, setBrewMethod] = useState('')
  const [varietal, setVarietal] = useState('')
  const [rating, setRating] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      createEntry({
        name,
        roaster,
        roastDate,
        description,
        brewMethod,
        varietal,
        rating,
      })
    )

    history.push(redirect)
  }

  return (
    <div className='auth-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <h2 className='form-title'>New Entry</h2>
        <div className='form-item'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='roaster'>Roaster</label>
          <input
            type='text'
            name='roaster'
            placeholder='Enter roaster'
            value={roaster}
            onChange={(e) => setRoaster(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='roastDate'>Roast Date</label>
          <input
            type='text'
            name='roastDate'
            placeholder='Enter roast date'
            value={roastDate}
            onChange={(e) => setRoastDate(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='description'>Description</label>
          <textarea
            type='text'
            name='description'
            placeholder='Enter description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='varietal'>Varietal</label>
          <input
            type='text'
            name='varietal'
            placeholder='Enter varietal'
            value={varietal}
            onChange={(e) => setVarietal(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='brewMethod'>Brew Method</label>
          <input
            type='text'
            name='brewMethod'
            placeholder='Enter brew method'
            value={brewMethod}
            onChange={(e) => setBrewMethod(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='rating'>Rating</label>
          <div className='radio-container'>
            <div className='radio-input'>
              <input
                type='radio'
                name='rating'
                value={1}
                onChange={(e) => setRating(e.target.value)}
              />
              <label>1</label>
            </div>
            <div className='radio-input'>
              <input
                type='radio'
                name='rating'
                value={2}
                onChange={(e) => setRating(e.target.value)}
              />
              <label>2</label>
            </div>
            <div className='radio-input'>
              <input
                type='radio'
                name='rating'
                value={3}
                onChange={(e) => setRating(e.target.value)}
              />
              <label>3</label>
            </div>
            <div className='radio-input'>
              <input
                type='radio'
                name='rating'
                value={4}
                onChange={(e) => setRating(e.target.value)}
              />
              <label>4</label>
            </div>
            <div className='radio-input'>
              <input
                type='radio'
                name='rating'
                value={5}
                onChange={(e) => setRating(e.target.value)}
              />
              <label>5</label>
            </div>
          </div>
        </div>
        <button className='btn btn-submit' type='submit'>
          Create Entry
        </button>
      </form>
    </div>
  )
}

export default CreateEntry
