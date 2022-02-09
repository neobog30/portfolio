import React from 'react';
import styles from "./App.module.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Main from './components/pages/Main/main';
import Projects from './components/pages/Projects/projects';
import Cv from './components/pages/CV/cv';


function App() {
  return (
    <div className={styles.container}>
       <Router basename='/portfolio'>
        
        {/* The navigation bar and other components you want to display on all pages come here */}
        {/* <div className={styles.navbar}>
          <Link to='/'>Front page</Link>
          <Link to='/example'>Look my example component</Link>
        </div> */}
        <Navbar/>  
        <Switch>
          {/* Changing content comes here */}
          <Route exact path='/' component={Main} />
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/cv' component={Cv} />
        </Switch>

        {/* <div style={{height:'2000px'}} /> */}
        {/* The footer and other components you want to display on all pages come here */}
        
 
     </Router>
    </div>
  );
}

export default App;
