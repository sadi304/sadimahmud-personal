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
        <div>
          <h3 className="headline">Sadi Mahmud</h3>
        </div>
        <div>
          <img className="logo rounded" src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.0-9/66747232_2826164240731182_3259381205543419904_o.jpg?_nc_cat=105&_nc_oc=AQlcJ142FoZoNN90XiQdTjfc2R9twCj3HlDUUF5TYpvtYzTvJ6AcjhliG6ooWZ59Bwk&_nc_ht=scontent.fdac7-1.fna&oh=057fb920d7044bd5396f7b38967e9f7d&oe=5E38BACA" alt="profile-pic" />
          <h6 className="text-center white">logo.png</h6>
        </div>
        <ul className="sidemenu-parent">
          <li>
            <ion-icon name="arrow-dropdown"></ion-icon> src
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