import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';

function App() {

  return (
    <>
      <Header/>
      <MainPage/>
      <Footer/>
    </>
  );
}

export default App;
