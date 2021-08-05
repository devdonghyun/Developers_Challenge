import './App.css';
import Header from './components/Header';
import GithubCont from './components/GithubCont';
import HorizonLine from './components/HorizonLine';
import ChallengeList from './components/ChallengeList';
import {challenges} from './Challenges';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Detail from './routes/Detail';
import Home from './routes/Home';
import SignUp from './routes/SignUp';
import Login from './routes/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/join' component={SignUp}/>
          <Route path='/challenge/:id' component={Detail}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
