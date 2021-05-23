import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Guitars from './Components/Guitars'

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Guitars' component={Guitars}/>
        </Switch>        
        <Footer/>
      </Router>
    </>
  );
}

export default App;
