export const findAnimal = (animals=[], animalId) =>
  animals.find(animal => animal.id === animalId)

export const findName = (names=[], nameId) =>
  names.find(name => name.id === nameId)

export const getNamesForAnimal = (names=[], animalId) => (
  (!animalId)
    ? names
    : names.filter(name => name.animalId === animalId)
)

export const findVote = (votes=[], animalId) => 
    votes.find(vote => vote.animalId === voteId)
)
export const VotesforAnimal = (names=[], animalId) =>
  names.filter(name => name.animalId === animalId).length
