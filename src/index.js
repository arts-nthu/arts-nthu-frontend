import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './screens/Home';
import Login from './screens/Login';

import ExhibitionDetails from './screens/ExhibitionDetails';
import Exhibition from './screens/Exhibition';
import News from './screens/News';
import NewsDetails from './screens/NewsDetails';
import Comment from './screens/Comment';
import Friends from './screens/Friends';
import Calendar from './screens/Calendar';

import History from './screens/about/History';
import Activity from './screens/about/Activity';
import Faculty from './screens/about/Faculty';
import Place from './screens/about/Place';
import Music from './screens/about/Music';
import Arts from './screens/about/Arts';

import AdminDashboard from './screens/admin/Dashboard';
import AdminExhibition from './screens/admin/Exhibition';
import ExhibitionCreate from './screens/admin/ExhibitionCreate';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        
        <Route path="/exhibitions/:id" component={ExhibitionDetails} />
        <Route exact path="/exhibitions" component={Exhibition} />
        <Route path="/news/:id" component={NewsDetails} />
        <Route exact path="/news" component={News} />
        <Route exact path="/comments" component={Comment} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/calendar" component={Calendar} />

        <Route exact path="/about/history" component={History} />
        <Route exact path="/about/activity" component={Activity} />
        <Route exact path="/about/faculty" component={Faculty} />
        <Route exact path="/about/place" component={Place} />
        <Route exact path="/about/music" component={Music} />
        <Route exact path="/about/arts" component={Arts} />

        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/exhibitions" component={AdminExhibition} />
        <Route exact path="/admin/exhibitions/create" component={ExhibitionCreate} />





      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
