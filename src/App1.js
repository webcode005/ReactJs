import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Top from './pages/Top';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';



function App() {
  return <>


<Router>
<Top/>

    <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={PageNotFound}></Route>
    
    
    </Switch>


</Router> 
     
  
  </> ;
}

export default App;
