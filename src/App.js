import React from 'react';
import axios from 'axios';
import md5 from 'md5';
// import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './components/history/history';
import Help from './components/help/Help';
import Footer from './components/footer/footer';
import { Route, Switch } from 'react-router-dom';

// Add a simple history list to the left side of the application

// List all previous queries, showing the method and the URL

// When a user clicks a previous query, populate the RESTy forms with the query information

// Completely hide the output area (Headers & Results) when there are none to display

// Display any fetch/load errors in place of the results area, if they occur

// EMPTY ARRAY IN JAVASCRIPT IS TRUTHY!!!

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: {},
      history: {},
      // results: [],
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
    console.log('REQ', this.state.request);
  };

  updateHistory = request => {
    let hash = md5(JSON.stringify(request));

    const history = {
      ...this.state.history,
      [hash]: request,
    };

    this.setState({ history }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    });
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
      this.toggleLoading();
      console.log('ERROR: ', error);
    }
  };

  // In the <App />, use routes to display the correct components, based on the route
  // Create a new <History/> page component that will:
  // Show a list of URLs you’ve loaded before
  // Show full details of each search
  // Add a button to each to re-run the search
  // Redirect to the home page to show the results
  // Create a new <Help/> page component that will:
  // Display static content to the users on how to use the application

  // Do we need componentDidMount?
  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({ history });
  }

  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/">
            <Form
              prompt="Go!"
              request={this.state.request}
              handler={this.fetchResults}
            />
            <History handler={this.updateRequest} calls={this.state.history} />
            <Results
              headers={this.state.headers}
              results={this.state.results}
              loading={this.state.loading}
            />
          </Route>
          <Route exact path="/history">
            <History handler={this.updateRequest} calls={this.state.history} />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
