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
           </h1>
       </header>
       <main className='App__main'>
         {this.renderMainRoutes()}
         <img src="https://i.imgur.com/gLUVJ7W.png" alt="Animal 1" width="200" height="200"/><br></br>
          <img src="https://i.imgur.com/JgrXNnE.png" alt="Animal 2" width="200" height="200"/><br></br>
          <img src="https://i.imgur.com/eSVBwj6.png" alt="Animal 3" width="200" height="200"/>
       </main>
     </div>
   )
 }
}
 
export default App

