import React from 'react'

import CreateCoffee from './coffees/CreateCoffee'
import ListCoffee from './coffees/ListCoffee'
import DetailCoffee from './coffees/DetailCoffee'
import UpdateCoffee from './coffees/UpdateCoffee'

import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'

import { useQuery } from 'react-query'

function App() {
  return (
    <Router>
      <nav>
        <ul className='flex'>
          <li>
            <Link to='/'>Home</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/coffees'>Coffees</Link>
            <br />
            <Link to='/coffees/create'>Create a Coffee</Link>
            <br />
          </li>
        </ul>
      </nav>
      <main>
        <Route path='/coffees'>
          <h1>Coffees</h1>
        </Route>

        <Switch>
          {/* Coffee routes */}
          <Route path='/coffees/create' component={CreateCoffee} />
          <Route path='/coffees/update/:id' component={UpdateCoffee} />
          <Route path='/coffees/detail/:id' component={DetailCoffee} />
          <Route path='/coffees' component={ListCoffee} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
