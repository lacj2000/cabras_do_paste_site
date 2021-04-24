import Head from 'next/head'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import HomePage from './HomePage';
import MembersPage from './MembersPage';
import ProjectsPage from './ProjectsPage';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/members' >
          <MembersPage/>
        </Route>
        
        <Route path = '/projects' >
          <ProjectsPage/>
        </Route>

        <Route exact path = '/' >
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  )
}
