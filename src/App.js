import React from 'react';
import axios from 'axios';
import md5 from 'md5';
import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './components/history/history';
import Footer from './components/footer/footer';

// Add a simple history list to the left side of the application

// List all previous queries, showing the method and the URL

// When a user clicks a previous query, populate the RESTy forms with the query information

// Completely hide the output area (Headers & Results) when there are none to display

// Display any fetch/load errors in place of the results area, if they occur

// Add a “Loading” indicator while fetching
// When the user clicks the “Go!” button, show a loading icon on the page
// When the fetching of results is complete, remove the loading icon and show the results

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: null,
      results: [],
      loading: false,
    };
  }

  // https://swapi.dev/api/people/
  handleForm = (count, headers, results) => {
    this.setState({ count, headers, results });
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
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
          loading={this.state.loading}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
