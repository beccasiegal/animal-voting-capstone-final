import React from 'react'

export default React.createContext({
  names: [],
  animals: [],
  addAnimal: () => {},
  addName: () => {},
  deleteName: () => {},
})