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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: null,
      history: {},
      results: [],
      request: {},
      loading: false,
    };
  }

  // https://swapi.dev/api/people/

  // updates results if needed
  updateResults = (headers, results) => {
    this.setState({ headers, results });
  };

  // updates the request body if needed
  updateRequest = request => {
    this.setState({ request });
  };

  // // Need to convert to fetch data
  // handleForm = (count, headers, results) => {
  //   this.setState({ count, headers, results });
  // };

  // Turns loading on/off
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  fetchResults = async request => {
    try {
      this.toggleLoading();
      this.updateRequest(request);
      let response = await axios(request);
      this.toggleLoading();
      this.updateHistory(request);
      this.updateResults(response.headers, response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Do we need componentDidMount?

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          prompt="Go!"
          request={this.state.request}
          handler={this.fetchResults}
        />
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
