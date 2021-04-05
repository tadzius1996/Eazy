import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import Services from './components/Services';
import Hire from './components/Hire';
import Dashboard from './components/Dashboard';
import {AppProvider} from './context';
import PrivateRoute from "./components/PrivateRoute";
import MyProfile from './components/MyProfile';
import StudentReport from './components/StudentReport';
import Calender from './components/Calender';
import Gallery from './components/Gallery';
import CallenderApp from './components/CalenderApp';

function App() {
  return (
    <div>
      <Router>
      <AppProvider>
        <Navbar />
        <Switch>
          <div className='bigContainer'>
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/Register' component={Register} />
          <Route path='/Login' component={Login} />
          <Route path='/Services' component={Services} />
          <Route path='/Hire' component={Hire} />
         
          <PrivateRoute path='/Dashboard' component={Dashboard} />
          <PrivateRoute path='/MyProfile' component={MyProfile} />
          <PrivateRoute path='/StudentReport' component={StudentReport} />
          <PrivateRoute path='/Calender' component={Calender} />
          <PrivateRoute path='/Gallery' component={Gallery} />
          </div>
        </Switch>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
