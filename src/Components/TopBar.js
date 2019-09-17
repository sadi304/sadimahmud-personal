import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './TopBar.css'; 

const pathMapper = {
  '/': 'about.json',
  '/skills': 'skills.json',
  '/portfolio': 'portfolio.json',
  '/contact': 'contact.json'
}

class TopBar extends Component {
  state = {
    tabs: [{
      pathname: this.props.location.pathname,
      name: pathMapper[this.props.location.pathname]
    }]
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    const { tabs } = this.state;
    if(pathname !== prevProps.location.pathname) {
      const hasPath = tabs.find(tab => tab.pathname === pathname);
      if(!hasPath) {
        this.setState({
          tabs: [
            ...tabs,
            {
              pathname: pathname,
              name: pathMapper[pathname]
            }
          ]
        })
      }
    }
  }

  handleTabRemove(pathnameToRemove) {
    const { history, location: { pathname } } = this.props;
    const { tabs } = this.state;
    if(tabs.length <= 1) return;
    
    this.setState({ tabs: tabs.filter(tab => tab.pathname !== pathnameToRemove) });

    if(pathnameToRemove === pathname) {
      history.push(tabs[0].pathname);
    }
  }

  render() {
    const { history, location: { pathname } } = this.props;
    const { tabs } = this.state;
    return(
      <div className="tab-bar">
        {
          tabs.map((tab, index) => (
            <div onClick={() => history.push(tab.pathname)} key={index} className={`tab ${tab.pathname === pathname ? 'active' : ''}`}>
              <span>{ tab.name }</span><span className="tab--close" onClick={e => {
                e.stopPropagation();
                this.handleTabRemove(tab.pathname)
              }}><ion-icon name="close"></ion-icon></span>
            </div>
          ))
        }
      </div>
    )
  }
}

export default withRouter(TopBar);