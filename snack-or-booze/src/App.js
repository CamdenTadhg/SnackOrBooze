import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import AddForm from './AddForm';
import NotFound from './NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      setIsLoading(true);
      let snacks = await SnackOrBoozeApi.getGoodies('snacks');
      setSnacks(snacks);
      setIsLoading(false);
    }
    async function getDrinks() {
      setIsLoading(true);
      let drinks = await SnackOrBoozeApi.getGoodies('drinks');
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacks();
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks}/>
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} type="snacks" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} type="drinks" />
            </Route>
            <Route path='/drinks/:id'>
              <MenuItem items={drinks} cantFind="/drinks" />
            </Route>
            <Route path='/add'>
              <AddForm setSnacks={setSnacks} setDrinks={setDrinks}/>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

//create Snack or Booze website
  //get tests running
//Rewrite tests on Vite version
  //write smoke tests
  //write snapshop tests
  //write api tests
  //write content tests
  //write event tests
//Fix styling on vite version