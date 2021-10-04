import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
function Top ()
{
    return <>
    
    
<nav class="navbar navbar-expand-sm bg-success navbar-dark">
  <ul class="navbar-nav">

  <li class="nav-item">    
       <a class="nav-link" href="#">Logo</a>
    </li>
   
    <li class="nav-item  active">
      <Link class="nav-link" to="/">Home</Link>
    </li>
    <li class="nav-item">    
       <Link class="nav-link" to="/about">About</Link>
    </li>
    <li class="nav-item">    
       <Link class="nav-link" to="/contact">Contact</Link>
    </li>
  </ul>
</nav>

</>;


}

export default Top;