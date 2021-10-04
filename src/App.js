import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Reviews from './Components/Reviews/Reviews';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
function App() {
  return (
    <div className="App">
      {/*  1. set router for the website */}
      <Router>
        {/* component added here -> Header
              Header will be fixed in all routes/pages available for user
        */}
        <Header></Header>
        {/* Now setting up route system */}
        <Switch>
          {/* Setting up the default page to show */}
          <Route path="/" exact>
            <Home></Home>
          </Route>
          {/* 1.Home page */}
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* 2.Services */}
          <Route path="/services">
            <Services></Services>
          </Route>
          {/* 3.Reviews */}
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          {/* 4.About us */}
          <Route path="/about">
            <About></About>
          </Route>
          {/* 5.Not found */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
