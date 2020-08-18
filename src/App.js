import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
//import Navbar from './components/layout/Navbar';
import WorldMap from './components/dashboard/WorldMap';
import PlotGraph from './components/dashboard/PlotGraph';
import AboutMe from './components/dashboard/AboutMe';
import India from './components/dashboard/India';
import Sidebar from './components/layout/Sidebar';
import News from './components/dashboard/News';
import Symptoms from './components/dashboard/Symptoms';
import SelfTest from './components/dashboard/SelfTest';
import IndiaGraph from './components/dashboard/IndiaGraph';
import './App.css';
import Topbar from './components/layout/Topbar';
import GlobalNews from './components/dashboard/GlobalNews';
import Header from './images/header-img.jpg';
import Prevent from './components/dashboard/Prevent';
import Testing from './components/dashboard/Testing';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; //spinner css
//import Loader from 'react-loader-spinner';



class App extends Component {

  render() {
    return (
      <div class="wrapper">
        <div class="top_navbar">
          <div class="hamburger" id="ham">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div>
          <div class="top_menu">
            <div class="logo" style={{ fontSize:"35px", fontWeight:"bold"}} >FightCovid-19</div>
            <ul>
              <li><a href="/aboutMe">
                <i class="fas fa-user"></i>
              </a></li>
            </ul>
          </div>
        </div>
        <Sidebar />

        <div class="main_container" id="main">
          <div>
            <img src={Header} alt="header" width="100%" height="380px" style={{boxShadow:"none",aspectRatio:"true"}} />
          </div>
          <Topbar />
          <div className="App container">
            <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
              <Switch>
                <Route exact path='/' component={WorldMap} />
                <Route path='/world-stats' component={PlotGraph}  />
                <Route path='/aboutMe' component={AboutMe} />
                <Route path='/indian-states' component={India} />
                <Route path='/news-india' component={News} />
                <Route path='/symptoms' component={Symptoms} />
                <Route path='/world-news' component={GlobalNews} />
                <Route path='/self-test'  component={SelfTest} />
                <Route path='/prevention' component={Prevent} />
                <Route path='/india-graphs' component={IndiaGraph} />
                <Route path='/india-CovidTesting' component={Testing} />
              </Switch>
            </BrowserRouter>
          </div>
          <div style={{ backgroundColor:"#333" , color:"white", width:"100%"}}>
              <h5 style={{textAlign:"right", padding:"2px"}}> &copy; 2020 mG.FightCovid-19 </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

