import React from 'react';

// Create a new <History/> inline component that will:

// Show a simple history list on the main page

// Allow a user to click and re-run any previous query

const History = props => {
  const calls = props.calls || {};

  function loadRequest(apiCall) {
    props.handler(apiCall);
  }

  return (
    <aside>
      <ul>
        {Object.keys(calls).map(key => (
          <li key={key}>
            <span className={`method ${props.calls[key].method}`}>
              {props.calls[key].method}
            </span>
            <button
              className="url"
              onClick={() => loadRequest(props.calls[key])}
            >
              {props.calls[key].url}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default History;
