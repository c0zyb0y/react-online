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
import IndexPage from "./Pages/category/IndexPage";
import CreatePage from "./Pages/category/CreatePage";
import EditPage from "./Pages/category/EditPage";
import UploadPage from "./Pages/UploadPage";
import { ToastProvider } from 'react-toast-notifications';
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import MemberPage from "./Pages/MemberPage";
import PrivateRoute from "./guard/auth";
import UserStoreProvider from "./context/UserContext";
//redux setup
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./redux/reducers/index";
 
const store = createStore(rootReducer)
 
function App() {
  return (
    <Provider store={store}>
      <UserStoreProvider>
      <ToastProvider>
        <Router>
          <NavBar />
 
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/contact_us">
              <ContactPage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/detail/:id/title/:title">
              <DetailPage />
            </Route>
            <Route path="/hospital">
              <HospitalPage />
            </Route>
 
            <Route path="/login">
              <LoginPage />
            </Route>
 
            <Route path="/register">
              <RegisterPage />
            </Route>
 
            <Route path="/upload">
              <UploadPage />
            </Route>
 
            <PrivateRoute path="/member">
              <MemberPage />
            </PrivateRoute>
 
            {/* makesense */}
            <Route
              path="/category"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} exact>
                    <IndexPage />
                  </Route>
 
                  <Route path={`${url}/create`}>
                    <CreatePage />
                  </Route>
 
                  <Route path={`${url}/edit/:id`}>
                    <EditPage />
                  </Route>
                </>
              )}
            ></Route>
          </Switch>
 
          <Footer />
        </Router>
      </ToastProvider>
    </UserStoreProvider>
    </Provider>
  );
}
 
export default App;