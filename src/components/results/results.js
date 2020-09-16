// Expects the count, headers, results to be sent in as props
// Renders the count
// Renders the Result Headers as “pretty” JSON
// Renders the Result Body as “pretty” JSON

import React from 'react';
import JSONPretty from 'react-json-pretty';

const Results = props => {
  return (
    <div id="results">
      <h3 data-testid="count">Count: {props.count}</h3>
      <h3>Headers: {props.headers}</h3>
      <h4>
        Results: <JSONPretty data={props.results}></JSONPretty>
      </h4>
    </div>
  );
};

export default Results;

// Remember: React REALLY doesn't like "raw" objects - you need to turn it into something React can render
// Easiest way is to just turn it into a string
