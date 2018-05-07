import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Route Imports
import App from './App';
import AboutMe from './components/AboutMe/AboutMe';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/AboutMe" component={AboutMe} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
