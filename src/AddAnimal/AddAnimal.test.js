import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddAnimal from './AddAnimal'

describe(`AddItemForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<AddAnimal />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
