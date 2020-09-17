import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'get',
      url: '',
    };

    this.handleURL = this.handleURL.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleURL = event => {
    let url = event.target.value;
    this.setState({ url });
  };

  handleMethod = event => {
    event.preventDefault();
    let method = event.target.value;
    this.setState({ method });
  };

  handleClick = event => {
    event.preventDefault();
    let url = this.state.url; // or event.target.value??
    this.setState({ url });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let raw = await fetch(this.state.url);
    let headers = await raw.headers.get('content-type');

    let data = await raw.json();
    let count = JSON.stringify(data.count);
    // let results = JSON.stringify(data.results);
    let results = data.results;
    // console.log('Stringified results???', results);

    // This says: After I do this stuff above, I'm going to call this.props.handler, and give it count and resultFromURL (this tells us that it requires a handler to be passed in)
    // This code REQUIRES that a "handler" function is supplied via props from SOMEWHERE - from the PARENT
    this.props.handler(count, headers, results);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>URL:</h3>
          <div>
            <input
              type="text"
              placeholder="Enter your URL here"
              onChange={this.handleURL}
            />
            <button>{this.props.prompt}</button>
          </div>
          <div>
            <button value="GET" onClick={this.handleMethod}>
              GET
            </button>

            <button value="POST" onClick={this.handleMethod}>
              POST
            </button>

            <button value="PUT" onClick={this.handleMethod}>
              PUT
            </button>

            <button value="DELETE" onClick={this.handleMethod}>
              DELETE
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
