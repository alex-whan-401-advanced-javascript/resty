//Alter the <Results /> component as follows:

//Add support for all REST methods

//Use a conditional component such as <If> to hide/show the results pane when there are none

//Use a conditional component such as <If> to hide/show a loading image during the fetch process

import React from 'react';
import JSONPretty from 'react-json-pretty';
import ReactJson from 'react-json-view';
import loading from '../../assets/loading.gif';

// Add a “Loading” indicator while fetching
// When the user clicks the “Go!” button, show a loading icon on the page
// When the fetching of results is complete, remove the loading icon and show the results

const Results = props => {
  return (
    <div id="results">
      {props.loading ? (
        <div>
          <img src={loading} alt="Loading..." />
        </div>
      ) : (
        <>
          <h3 data-testid="count">Count: {props.count}</h3>
          <h3>
            Headers: <ReactJson src={props.headers}></ReactJson>
          </h3>
          <h4>
            Results: <ReactJson src={props.results}></ReactJson>
          </h4>
        </>
      )}
    </div>
  );
};

export default Results;
