import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Results from './components/results/Results';
import Footer from './components/footer/Footer';

//Container

//Holds state: Count and Results Array

//A class method that can update state

//Renders 2 Child Components

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      headers: null,
      results: [],
    };
  }

  // Missing headers
  // https://swapi.dev/api/people/
  handleForm = (count, headers, results) => {
    this.setState({ count, headers, results });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form prompt="Go!" handler={this.handleForm} />
        <Results
          count={this.state.count}
          headers={this.state.headers}
          results={this.state.results}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
