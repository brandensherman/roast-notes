import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import EntryScreen from './screens/EntryScreen'
import CreateEntryScreen from './screens/CreateEntryScreen'
import SampleEntryScreen from './screens/SampleEntryScreen'

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/login' component={LoginScreen} />
        <Route exact path='/register' component={RegisterScreen} />
        <Route exact path='/sample/0' component={SampleEntryScreen} />

        <Route path='/entry/:id' component={EntryScreen} />
        <Route path='/create' component={CreateEntryScreen} />
      </div>
    </Router>
  )
}

export default App
