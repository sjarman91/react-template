import React, { Component } from 'react';

const App = props => {
  const { children } = props;

  return (
    <div>
      { children }
    </div>
  )
}

export default App;

