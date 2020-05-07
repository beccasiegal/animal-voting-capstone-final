import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Animals from '../Animals/Animals'
import Names from '../Names/Names'
import AddAnimal from '../AddAnimal/AddAnimal'
import AddName from '../AddName/AddName'
import dummyStore from '../dummy-store'
import config from '../config'
import { getNamesForAnimal, findName, findAnimal} from '../names-helper'
import './App.css'


class App extends Component {
  state = {
   animals: [],
    names: [],
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 600)
    
  }
  

  renderNavRoutes() {
    const { animals, names } = this.state
    return (
      <div>
        {['/', '/animals/animalsid'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps =>
              <Animals
                animals={animals}
                names={names}
                {...routeProps}
              />
            }
          />
        )}
        <Route
          path='/names/:animalId'
          render={routeProps => {
            const { animalId } = routeProps.match.params
            const name = findName(name, animalId) || {}
            const animal = findAnimal(animal, animalId)
            return (
              <Animals
                {...routeProps}
                animal={animal}
              />
            )
          }}
        />
        <Route
          path='/add-animal'
          component={Animals}
        />
        <Route
          path='/add-name'
          component={Names}
        />
      </div>
    )
  }

  renderMainRoutes() {
    const { names, animals } = this.state
    return (
      <div>
        {['/', '/animals/:animalId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { animalId } = routeProps.match.params
              const  votes = (votes, animalId)
              return (
                <Names
                  {...routeProps}
                  votes={votes}
                />
              )
            }}
          />
        )}
        
      
        <Route
          path='/add-animal'
          component={AddAnimal}
        />
        <Route
          path='/add-name'
          render={routeProps => {
            return (
              <AddName
                {...routeProps}
                animals={animals}
              />
            )
          }}
        />
      </div>
    )
  }

  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          {this.renderNavRoutes()}
        </nav>
        <header className='App__header'>
          <h1>
            <Link to='/'>Animal Naming and Voting</Link>
            {' '}
          </h1>
        </header>
        <main className='App__main'>
          {this.renderMainRoutes()}
        </main>
      </div>
    )
  }
}

export default App
