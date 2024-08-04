import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Separator } from './components/Separator';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Separator classvar="separator1"/>
      <Projects/>
      <Separator classvar="separator2"/>
      <Skills/>     
    
    </div>
  );
}

export default App;
