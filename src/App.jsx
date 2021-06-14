import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './SCSS/Main.css';
const Nav = lazy(() => import('./Components/Nav.jsx'));
const Home = lazy(() => import('./Components/Home.jsx'));
const Footer = lazy(() => import('./Components/Footer.jsx'));
const Guitars = lazy(() => import('./Components/Guitars.jsx'));
const Guitar = lazy(() => import('./Components/Guitar.jsx'));

const renderLoader = () => <p>Loading</p>;

const App = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/guitars' component={Guitars} />
          <Route path='/guitar/:slug' component={Guitar} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
