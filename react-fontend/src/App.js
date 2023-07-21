import React from "react";
import "./App.css";
import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";
import Employees from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateEmployee from "./components/CreateEmployee";

function App() {
  return (
    <div>
        <Router>
              <Header />
                <div className="container">
                    <Switch> 
                          <Route path="/" exact component={Employees} />
                          <Route path="/employees" component={Employees} />    
                          <Route path="/add-employee" component={CreateEmployee} />   
                           

                    </Switch>
                </div>
              <Footer />
        </Router>
    </div>
  );
}

export default App;

