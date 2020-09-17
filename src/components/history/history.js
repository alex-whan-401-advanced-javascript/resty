import React from 'react';

// Create a new <History/> inline component that will:

// Show a simple history list on the main page

// Allow a user to click and re-run any previous query

const History = props => {
  const calls = props.calls || {};

  return (
    <aside>
      <ul>
        <li>All the history goes here!!</li>
      </ul>
    </aside>
  );
};

export default History;
