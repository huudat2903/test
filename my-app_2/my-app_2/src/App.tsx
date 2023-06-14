
import './App.css';
import Header from "../src/Components/Header";
import Footer from './Components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import {Switch,Route} from "react-router-dom";
import Home from "../src/Components/Home"

function App() {
  //khai báo 1 state
  //logged = false
  return (
    <>
      <div className="row">
        <Header/>
      </div>
      <div className="container">
        <div className="row">
          <Switch>
            {/* <Route path="/Product" component={Container} /> */}
            <Route path="/Home" component={Home} exact/>
          </Switch>
        </div>
      </div>
      <div className="row">
          <Footer/>
      </div>
    </>
  );
}

export default App;
