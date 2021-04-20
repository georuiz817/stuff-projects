import DatePicker from "./date-project/DatePicker.js";
import TicketFeature from "./ticket-project/TicketFeature.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <a href='/'>time widget</a>
      <a href='tickets'>ticket widget</a>
      <Router>
      <Switch>
        <Route exact path="/tickets">
          <TicketFeature />
        </Route>
        <Route exact path='/'>
          <DatePicker />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
