import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from './Searchpage';
import RecommendedVideo from "./RecommendedVideo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM class naming Convation
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/Search/:searchTerm">
          <Sidebar />
          <SearchPage/>

          </Route>
          <Route path="/">
            <div className="app__page">
              {/* SideBar */}
              <Sidebar />
              {/* RecommendedVideo */}
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
     
      
       
    </div>
  );
}

export default App;
