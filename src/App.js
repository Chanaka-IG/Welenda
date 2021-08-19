
import UserRegistration from './pages/User_resistration';
import UserProfile from './pages/User_profile';
import Topbar from './components/Topbar'
import Home from './pages/Home';
import Login from './pages/Login';
import Message from './pages/Message';
import Search from './pages/Search';
import Complaints from './pages/Complaints';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HeroSection from './components/HeroSection';
import './App.css'



function App() {
  return (
   <>
   

    <Router>
     <Topbar />
      <Switch>
          <Route path = "/" exact component={Login} />
          <Route path = "/Login" exact component={Login} />
          <Route path = "/Home" component={Home} />
          <Route path = "/User_resistration" component={UserRegistration} />
          <Route path = "/User_profile" component={UserProfile} />
          <Route path = "/Message" component={Message} />
          <Route path = "/Search" component={Search} />
          <Route path = "/Complaints" component={Complaints} />
        
         
      </Switch>

    </Router>  
     
  </> 
 
  );
}

export default App;
