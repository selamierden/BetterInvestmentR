import React from 'react'
import Navbar from './components/Navbar'
import VideoComponent from './components/VideoComponent'
import Footer from './components/Footer'
import MainPrices from './components/MainPrices'
// import Emtia from './components/Emtia'
import CoinList from './components/CoinList'
import CurrentTransaction from './components/CurrentTransaction'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransactionRecord from './components/TransactionRecord'


const Home = () => {
  return (
    <div style={{backgroundColor: "darkblue"}}>
      <Navbar></Navbar>
      <VideoComponent></VideoComponent>
      <MainPrices></MainPrices>
      <Footer></Footer>
    </div>
  );
};

const News = () => {
  return (
    <div>
      <Navbar></Navbar>
      BURASI NEWS GARDEŞ
    </div>
  )
}

const Prices = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CoinList></CoinList>
    </div>
  );
};

const CT = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CurrentTransaction></CurrentTransaction>
    </div>
  )
}

const TR = () => {
  return (
    <div>
       <Navbar></Navbar>
       <TransactionRecord></TransactionRecord>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      BURASI CONTACT GARDEŞ
    </div>
  )
}

const LoginRegister = () => {
  return (
    <div>kayıt alma yeri gardeş</div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/ct" element={<CT />} />
        <Route path="/tr" element={<TR />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;