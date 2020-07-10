import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './style/style.scss';
import style from './app.module.scss';
import Header from './components/Header/Header';
import AboutUs from './views/AboutUs/AboutUs';
import Contact from './views/Contact/Contact';
import SkiCams from './views/SkiCams/SkiCams';
import Home from './views/Home/Home';


const App = () => (
  <div className={style.root}>
    <BrowserRouter>
      <Header />
      <Switch>

        <Route
          path="/"
          component={Home}
          exact
        />
        <Route
          path="/about-us"
          component={AboutUs}
          exact
        />
        <Route
          path="/contact"
          component={Contact}
          exact
        />
        <Route
          path="/ski-cams"
          component={SkiCams}
          exact
        />
        <Route
        path="/add-offer/"
        //component={AddOffer}
        exact
        />
      </Switch>
    </BrowserRouter>

  </div>
);

export default App;
