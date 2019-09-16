import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutMe from '../Pages/AboutMe';
import Skills from '../Pages/Skills';
import Portfolio from '../Pages/Portfolio';

const TabBar = () => (
  <div className="tab-bar">
    <div className="tab">
      aboutme.json
    </div>
  </div>
)

const AppRouter = () => (
  <Router>
    <div className="app">
      <div className="app-sidemenu">
        <ul className="sidemenu-parent">
          <li>
            <ion-icon name="arrow-dropright"></ion-icon> src
            <ul className="sidemenu">
              <li>
                <ion-icon name="contact"></ion-icon>
                <Link to="/">about.json</Link>
              </li>
              <li>
                <ion-icon name="flash"></ion-icon>
                <Link to="/skills">skills.json</Link>
              </li>
              <li>
                <ion-icon name="trophy"></ion-icon>
                <Link to="/portfolio">portfolio.json</Link>
              </li>
              <li>
                <ion-icon name="send"></ion-icon>
                <Link to="/contact">contact.json</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="app-body">
        <TabBar />
        <div className="app-content">
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </div>
    </div>
  </Router>
)

export default AppRouter;