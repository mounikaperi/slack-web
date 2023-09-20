import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="app">
      <Router>
        {!user 
          ? (<Login />)
          : ( <>
                <Header />
                <div className="app__body">
                  <Sidebar />
                  <Switch>
                    <Route exact path="/channel/:channelId"><Chat /></Route>
                    <Route exact path="/">Welcome Screen</Route>
                  </Switch>
                </div>
              </>
            )}
      </Router>
    </div>
  );
}

export default App;
