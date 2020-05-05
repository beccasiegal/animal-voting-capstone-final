export const findAnimal = (animals=[], animalId) =>
  animals.find(animal => animal.id === animalId)

export const findName = (names=[], nameId) =>
  names.find(name => name.id === nameId)

export const getNamesForAnimal = (names=[], animalId) => (
  (!animalId)
    ? names
    : names.filter(name => name.animalId === animalId)
)

export const countNamesforAnimal = (names=[], animalId) =>
  names.filter(name => name.animalId === animalId).length
