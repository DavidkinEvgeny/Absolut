import './App.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Advanteges from './components/advantages/Advantages';
import Branches from './components/branches/Branches';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Advanteges />
      <Branches />
      <Contact />
      <About />
    </div>
  );
}

export default App;
