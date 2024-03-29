import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Portfolio from '../Pages/Portfolio';
import SideBar from '../Components/SideBar';
import Contact from '../Pages/Contact';
import TopBar from '../Components/TopBar';

const AppRouter = () => (
  <Router>
    <div className="app">
      <div className="app-sidemenu">
        <SideBar />
      </div>
      <div className="app-body">
        <TopBar />
        <div className="app-content">
          <Switch>
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/" component={About} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
)

export default AppRouter;