import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note';
import CreateArea from './components/CreateArea';

function App() {
  return (
    <div className="App">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
