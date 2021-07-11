import './App.css';
import Top from './components/Top';
import Footer from './components/Footer';
import Waste from './components/Waste';
import Welcome from './components/Welcome';
import waste from './images/waste.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="firstContainer">
            <Router>
            <Switch>
                <Route exact path="/waste" render={()=>{
                  return(
                    <>
                    <div>
                    this is waste page

                    </div>
                    <Footer/>
                    </>
                  )}}/>
                
                <Route exact path="/" render={()=>{
                  return(
                    <>
                    <Welcome/>
                    
                    <Footer/>
                    </>
                  )}}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
