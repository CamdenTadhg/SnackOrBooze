import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Router } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Router>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Router>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

//create Snack or Booze website
  //look through current code
  //run program
  //change home page to show # of food items and # of drink choices
  //abstract the FoodMenu and FoodItem components for use with Drinks
  //add Drinks link to the navbar
  //add DrinksMenu component that matches the FoodMenu component, which teach drink choice being a link to details about the drink
  //add a page that lets users add either a drink or a snack
  //Refactor app using good design
    //look for bad variable names
    //look for AJAX calls in components
  //Write tests
  //document code
  //handle not-found pages
  //the homepage shows the number of food items and drink choices
  //the navbar has a Drinks link leading to a page where the drinks are listed
  //in the drinks listing page, each drink is a link displaying more information about that dirnk
  //the solution abstracts the code in FoodMenu and FoodItem instead of duplicating it in the new Drink-related components
  //the AJAX calls are not running inside nested React components
  //the app include tests
  //a message appears for not-found pages instead of an error
  //for non-existant drinks or foods, the app redirects to the respective listing page
  //the app allows the user to create custom cocktails and ingredients
  //the app is bug free
  //an understanding of abstracting React components to reduce code duplication is demonstrated
  //an understanding of writing efficient React code is demonstrated
  //an understanding of effective React state management is demonstrated
  //an understanding of React hooks is demonstrated
  //the solution is submitted
  //variable names accurately represent their stored values
  //variable names follow the best practices for the programming language used
  //variable names are easy to read and understanding
  //comments are present when necessary