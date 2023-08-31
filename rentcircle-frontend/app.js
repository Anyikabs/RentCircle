import React from 'react';
import ReactDOM from 'react-dom';

// Create a functional component
function App() {
  return (
    <div>
      <h1>Welcome to RentCircle</h1>
      <p>Find your perfect rental property!</p>
    </div>
  );
}

// Render the App component to the root element in index.html
ReactDOM.render(<App />, document.getElementById('root'));
