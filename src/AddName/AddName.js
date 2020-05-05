import React, { Component } from 'react'
import Animals from './Animals/Animals.js'
import './AddName.css'

export default class AddName extends Component {
  static defaultProps = {
    Animals: [],
  }
  render() {
    const {AddName } = this.props
    return (
      <section className='AddName'>
        <h2>Name your animal</h2>
        <Animals>
          <div className='field'>
            <label htmlFor='name-input'>
              Name
            </label>
            <input type='text' id='name-input' />
          </div>
         
          <div className='buttons'>
            <button type='submit'>
              Add Name
            </button>
          </div>
        </Animals>
      </section>
    )
  }
}
