import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header />

      <div>
        <Route exact path='/' component={HomeScreen} />
      </div>
    </Router>
  );
}

export default App;
