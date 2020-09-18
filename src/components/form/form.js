import React from 'react';
import md5 from 'md5';
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

  componentDidUpdate(props) {
    const nextHash = md5(JSON.stringify(props.request));
    const stateHash = md5(JSON.stringify(this.state.request));

    if (nextHash === stateHash) return;
    const request = { ...props.request };

    console.log('componentDidUpdate', request);
    this.setState({ request });
  }

  // should update our URL
  handleURL = event => {
    let url = event.target.value;
    let request = { ...this.state.request, url };
    this.setState({ request });
  };

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
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              required={true}
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

            <textarea
              name="data"
              onChange={this.handleDataBody}
              defaultValue={this.state.request.data}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
