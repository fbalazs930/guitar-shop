import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Guitars from './Components/Guitars';
import Guitar from './Components/Guitar';
import guitarData from './Components/GuitarData';

function App() {
  return (
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/guitars' component={Guitars}/>
          <Route path='/guitar' component={Guitar} name='helo'/>
        </Switch>        
        <Footer/>
      </Router>
  );
}

export default App;
