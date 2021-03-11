import { createContext, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';

export const leaguesContext = createContext();

function App() {
  const [Leagues,SetLeagues] = useState([]);
  useEffect(() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    fetch(url)
    .then(res => res.json())
    .then(data => SetLeagues(data.leagues.splice(0,20)))
  },[])
  return (
    <leaguesContext.Provider value={[Leagues]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/leagueDetails/:league">
          <LeagueDetails/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </leaguesContext.Provider>
  );
}

export default App;
