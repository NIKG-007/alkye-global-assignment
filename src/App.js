import React from 'react';
import './App.css';
import Header from './components/header';
import MainSection from './main/mainSection';
import MiddleSection from './main/middleSection';
import DiversitySection from './main/diversitySection';
import SuccessSection from './main/successSection';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <MainSection />
      <MiddleSection />
      <DiversitySection />
      <SuccessSection />
      <Footer />
    </div>
  );
}

export default App;