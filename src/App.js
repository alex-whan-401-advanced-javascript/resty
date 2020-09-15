import React from 'react';
import './App.css';
import Header from '../src/components/header/header';
import Form from '../src/components/form/form';
import Footer from '../src/components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
