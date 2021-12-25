import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ProductPage from "./Pages/ProductPage";
import ContactPage from "./Pages/ContactPage";
import DetailPage from "./Pages/DetailPage";
import HospitalPage from "./Pages/Hospital/HospitalPage";


function App() {
  return (
    <Router>
       <NavBar/>
       <Switch>
         <Route exact path ='/'><HomePage/></Route>
         <Route path ='/product'><ProductPage/></Route>
         <Route path = '/about'><AboutPage/></Route>
         <Route path ='/contact'><ContactPage/></Route>
         <Route path ='/detail/:id/title/:title'>
           <DetailPage/>
         </Route>
         <Route path ='/hospital'><HospitalPage/></Route>
       </Switch>
       <Footer/>
    </Router>
  );
}

export default App;
