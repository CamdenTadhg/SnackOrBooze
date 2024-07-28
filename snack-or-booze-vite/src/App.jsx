import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import AddForm from './AddForm';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

//renders loading screen if loading, else renders app. 
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    //get the list of snacks from the API and set state appropriately
    async function getSnacks() {
      console.log('starting getSnacks');
      setIsLoading(true);
      let loadSnacks = await SnackOrBoozeApi.getGoodies('snacks');
      console.log('getSnacks data returned')
      setSnacks(loadSnacks);
      setIsLoading(false);
    }
    //get the list of drinks from the API and set state appropriately
    async function getDrinks() {
      console.log('starting getDrinks');
      setIsLoading(true);
      let loadDrinks = await SnackOrBoozeApi.getGoodies('drinks');
      console.log('getDRinks data returned');
      setDrinks(loadDrinks);
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
          <Routes>
            <Route path="/" element={<Home snacks={snacks} drinks={drinks}/>} />
            <Route path="/snacks" element={<Menu items={snacks} type="snacks" />} />
            <Route path="/snacks/:id" element={<MenuItem items={snacks} cantFind="/snacks" />}/>
            <Route path="/drinks" element={<Menu items={drinks} type="drinks" />} />
            <Route path='/drinks/:id' element={<MenuItem items={drinks} cantFind="/drinks" />}/>
            <Route path='/add' element={<AddForm setSnacks={setSnacks} setDrinks={setDrinks}/>}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

//create Snack or Booze website
//get tests running
  //App.test.jsx (1.5 hours)
  //Submit

