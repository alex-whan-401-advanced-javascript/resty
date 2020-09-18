//Alter the <Results /> component as follows:

//Add support for all REST methods

//Use a conditional component such as <If> to hide/show the results pane when there are none

//Use a conditional component such as <If> to hide/show a loading image during the fetch process

import React from 'react';
import ReactJson from 'react-json-view';
import Loading from '../loading/loading';
import './results.scss';

// Add a “Loading” indicator while fetching
// When the user clicks the “Go!” button, show a loading icon on the page
// When the fetching of results is complete, remove the loading icon and show the results

/* <h3 data-testid="count">Count: {props.count}</h3> */

const Results = props => {
  return (
    <div className="results">
      {props.loading ? <Loading /> : resultsData(props)}
    </div>
  );
};

const resultsData = props => {
  // empty array is truthy - so we need to check length???
  if (props.results) {
    return (
      <>
        <h3 data-testid="headers">Headers:</h3>
        <ReactJson
          src={props.headers}
          theme="summerfruit:inverted"
          indentWidth="2"
        />

        <h3 data-testid="results">Results:</h3>
        <ReactJson
          src={props.results}
          theme="summerfruit:inverted"
          indentWidth="2"
        />
      </>
    );
  } else {
    return null;
  }
};

export default Results;
