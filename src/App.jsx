import React, { createContext, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PageNotFound from './pages/404'
import { NavBar } from 'components/appbar';
import firebaseApp from './firebase/firebaseConfig'
import Dashboard  from './pages/Dashboard';

export const UserContext = createContext([])

function App() {

  const [loggedUser, setLoggedUser] = useState({email:"", isLoggedIn:false})
  
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route  path="/login"><LoginPage/></Route>
        <Route  path="/register"><RegisterPage/></Route>
        <Route path="/dashboard"><Dashboard/></Route>
        <Route  path="*"><PageNotFound/></Route>
        
      </Switch>
    </Router>
    </UserContext.Provider>
        
  );
}

export default App;    
