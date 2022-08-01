import "./App.css";
import Profile from "./Profile";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    // <BrowserRouter>
    //   <div>
    //     <Route path = '/profile' component = {Profile}/>
    //   </div>
    // </BrowserRouter>
    <Profile />
  );
};
export default App;
