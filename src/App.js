import Home from './components/Home'
import Banner from './components/Banner';
import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
