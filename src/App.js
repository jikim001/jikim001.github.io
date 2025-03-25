// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
// import About from './components/about/About';
// import Contact from './components/contact/Contact';
// import Portfolio from './components/portfolio/Portfolio';
// import Resume from './components/resume/Resume';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        {/* <About />
        <Resume />
        <Portfolio />
        <Contact /> */}
      </main>

    </>
  )
}

export default App;
