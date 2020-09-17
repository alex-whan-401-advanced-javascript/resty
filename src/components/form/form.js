import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        method: props.request.method || 'get',
        url: props.request.url || '',
        data: props.request.data ? JSON.stringify(props.request.data) : '',
      },
    };
  }

  // should update our URL
  handleURL = event => {
    // event.preventDefault();
    let url = event.target.value;
    let request = { ...this.state.request, url }; // can we use "request" name here too?
    this.setState({ request });
  };

  // should update our method
  // method APPEARS to be updating properly
  // Just kidding, it's definitely not
  handleMethod = method => {
    // event coming up UNDEFINED??
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
              value="put"
              className="methodSelect"
              onClick={() => this.handleMethod('put')}
            >
              PUT
            </span>

            <span
              value="delete"
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
