import './SCSS/Main.css';
import Nav from './Components/Nav.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import Guitars from './Components/Guitars.jsx';
import Guitar from './Components/Guitar.jsx';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/guitars' component={Guitars} />
        <Route path='/guitar/:slug' component={Guitar} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
