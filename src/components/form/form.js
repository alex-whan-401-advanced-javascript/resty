import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
    };
    this.handleURL = this.handleURL.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleURL = event => {
    let url = event.target.value;
    this.setState({ url });
  };

  handleMethod = event => {
    let method = event.target.value;
    this.setState({ method });
  };

  handleClick = event => {
    event.preventDefault();
    let url = event.target.value;
    this.setState({ url });
  };

  render() {
    return (
      <div>
        <form>
          <h3>URL:</h3>
          <div>
            <input
              type="text"
              value={this.state.url}
              placeholder="Enter your URL here"
              onChange={this.handleURL}
            />
            <button>GO!</button>
          </div>
          <div>
            <input
              type="radio"
              name="method"
              id="get"
              value="GET"
              label="GET"
              onClick={this.handleMethod}
            />
            <label>GET</label>

            <input
              type="radio"
              name="method"
              id="post"
              value="POST"
              onClick={this.handleMethod}
            />
            <label>POST</label>

            <input
              type="radio"
              name="method"
              id="put"
              value="PUT"
              onClick={this.handleMethod}
            />
            <label>PUT</label>

            <input
              type="radio"
              name="method"
              id="delete"
              value="DELETE"
              onClick={this.handleMethod}
            />
            <label>DELETE</label>
          </div>
        </form>
        <div id="results">
          <h3>
            {this.state.method} {this.state.url}
          </h3>
        </div>
      </div>
    );
  }
}

export default Form;
