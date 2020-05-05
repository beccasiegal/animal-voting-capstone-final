
import React, { Component } from 'react'
import Animals from '../Animals/Animals'


export default class AddPicture extends Component {
  render() {
    return (
      <section className='AddAnimal'>
        <h2>Add an Animal</h2>
        <Animals>
          <div className='field'>
            <label htmlFor='picture-url-input'>
              Image URL
            </label>
            <input type='text' id='picture-url-input' />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add Animal
            </button>
          </div>
        </Animals>
      </section>
    )
  }
}