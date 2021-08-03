import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GithubCont from './components/GithubCont';
import HorizonLine from './components/HorizonLine';
import ChallengeList from './components/ChallengeList';
import {challenges} from './Challenges';
import ImgMedia from './components/Challenge';

function App() {
  return (
    <div className="App">
      <Header/>
      <GithubCont/>
      <HorizonLine text='참여 중인 챌린지'/>
      <ChallengeList challenges={challenges}/>
      
    </div>
  );
}

export default App;
