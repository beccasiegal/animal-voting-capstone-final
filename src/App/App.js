import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddAnimal from '../AddAnimal/AddAnimal'
import AddName from '../AddName/AddName'
import dummyStore from '../dummy-store'
import config from '../config'
import names-helper from '../names-helper'
import './App.css'


class App extends Component {
  state = {
   animals: [],
    names: [],
  };

  componentDidMount() {
    // fake date loading from API call
    fetch(`${config.API_ENDPOINT}/names`)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(names => {
        this.setState({names});
            })
            .then (()=> {
              return (fetch(`${config.API_ENDPOINT}/animals`))
            })
            .then(res => {
              if(!res.ok) {
                throw new Error('Something went wrong, please try again later');
              }
              return res.json();
            })
            .then (animals =>{
              this.setState({animals})
            })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  

  renderNavRoutes() {
    const { animals, names } = this.state
    return (
      <>
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
            const animal = findAnimal(animal, animal_id)
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
      </>
    )
  }

  renderMainRoutes() {
    const { name, animal } = this.state
    return (
      <>
        {['/', '/animals/:animalId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { animalId } = routeProps.match.params
              const  votes = (votes, name_Id)
              return (
                <Names
                  {...routeProps}
                  votes={votesForAnimal}
                />
              )
            }}
          />
        )}
        <Route
          path='/names/:name_Id'
          render={routeProps => {
            const { name_Id } = routeProps.match.params
            const vote = findVote(votes, name_Id)
            return (
              <Names
                {...routeProps}
                vote={vote}
              />
            )
          }}
        />
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
      </>
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
            <FontAwesomeIcon icon='check-double' />
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
