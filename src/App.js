import React from "react";
import Home from "./Home";
import Pizza from "./Pizza";
import { Route, Link} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <Link to='/'>Home</Link>
      <Link to='/Pizza'>Pizza</Link>

      <Route exact path='/' component={Home}/>
      <Route path='/Pizza'component={Pizza}/>
    </div>
  );
};

export default App;
