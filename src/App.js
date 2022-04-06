import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Liste from "./Pages/Liste/Liste";
import Scroll from "./Pages/Scroll/Scroll";
import StateAnim from "./Pages/StateAnim/StateAnim";

function App() {
  return (
    <Router>
      <div className="global-container">
        <Navbar />

        <Switch>
          <Route path="/" exact component={Liste} />
          <Route path="/scroll" exact component={Scroll} />
          <Route path="/stateanim" exact component={StateAnim} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
