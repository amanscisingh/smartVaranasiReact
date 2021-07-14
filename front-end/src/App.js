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
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Top />
          <Footer />
        </Route>
        <Route exact path="/waste">
          <Waste />
        </Route>
      </Switch>
    </Router>
  
  );
}

export default App;
