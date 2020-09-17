import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: props.request.method || 'get',
      url: props.request.url || '',
      request: {},
      data: props.request.data ? JSON.stringify(props.request.data) : '',
    };
  }

  // should update our URL
  handleURL = event => {
    let url = event.target.value;
    let request = { ...this.state.request, url };
    this.setState({ request });
  };

  // should update our method
  // method APPEARS to be updating properly
  handleMethod = method => {
    let request = { ...this.state.request, method };
    this.setState({ request });
  };

  handleDataBody = event => {
    try {
      let data = JSON.parse(event.target.value);
      let request = { ...this.state.request, data };
      this.setState({ request });
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async (event, props) => {
    event.preventDefault();
    this.props.handler(this.state.request);

    // let raw = await fetch(this.state.url);
    // let headers = await raw.headers.get('content-type');

    // let data = await raw.json();
    // let count = JSON.stringify(data.count);

    // let results = data.results;
  };

  // may need to CALL these methods below
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>URL:</h3>
          <div>
            <input
              type="text"
              defaultValue={this.state.request.url}
              placeholder="Enter your URL here."
              onChange={this.handleURL}
            />
            <button>{this.props.prompt}</button>
          </div>
          <div>
            <span
              value="get"
              className="methodSelect"
              onClick={() => this.handleMethod('get')}
            >
              GET
            </span>

            <span
              value="post"
              className="methodSelect"
              onClick={() => this.handleMethod('post')}
            >
              POST
            </span>

            <span
              className="methodSelect"
              onClick={() => this.handleMethod('put')}
            >
              PUT
            </span>

            <span
              className="methodSelect"
              onClick={() => this.handleMethod('delete')}
            >
              DELETE
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
