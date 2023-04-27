// import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
// import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div className="App">

        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/home" exact>
          <LandingPage />
        </Route>

        <Route path="/product" exact>
          <Header />
          <Home />
        </Route>

        <Route path="/cart" exact>
          <Header />
          <Cart />
        </Route>

        <Route path="/contact" exact>
          <Contact />
        </Route>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
