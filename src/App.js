import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import './assets/fontawesome/css/all.min.css';
import Shopping from './Components/Pages/shopping/Shopping';
import Dining from './Components/Pages/Dining';
import Offices from './Components/Pages/Offices';
import Home from './Components/Pages/homepage/Home';

function App() {
  return (
    <div className="App">
     <Router>
       <Route exact path="/" component={Home} />
          <Route exact path="/shopping" component={Shopping}/>
          <Route exact path="/dining" component={Dining} />
          <Route exact path="/offices" component={Offices} />
        </Router>
    </div>
  );
}

export default App;
