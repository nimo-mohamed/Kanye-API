import React from 'react';
import './App.css';
import QuotesList from './containers/QuotesList';

// This is the main or root component of your application.

function App() {
  // Within the component's render method (the return statement), you're defining its JSX structure.
  return (
    // The outermost <div> acts as a container for the entire App. It's given a className 'App', 
    // which you can target with CSS for styling.
    <div className="App">
      
     {/* This is a header (h1) that displays a title for the app. */}
      <h1>Kanye West Quotes</h1>
{/*       
      // This is the <QuotesList /> component, which is responsible for fetching and displaying 
      // the quotes from the Kanye REST API. It's used as a child component within App. */}
      <QuotesList />
      
    </div>
  );
}

// This exports the 'App' component so that it can be imported and used in the main entry point of the application (e.g., index.js).
export default App;
