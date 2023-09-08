// Importing necessary hooks and components.
// 'React' is the core library.
// 'useState' is the hook for adding state management to functional components.
// 'useEffect' is the hook for performing side effects in functional components, like data fetching or manual DOM manipulations.
import React, { useState, useEffect } from 'react';

// Importing the 'Quote' component to use within this component.
import Quote from '../components/Quote';

function QuotesList() {
  
  // Here, we declare a piece of state called 'quote'.
  // 'setQuote' is the function to update that state.
  // The initial value of 'quote' is an empty string.
  const [quote, setQuote] = useState('');

  // This is a function that fetches a quote from the Kanye REST API.
  const fetchQuote = () => {
    
    // The 'fetch' function retrieves data from a URL.
    fetch("https://api.kanye.rest/")
      // Once the data is returned, we parse the JSON.
      .then(response => response.json())
      // Then, we update our 'quote' state with the quote from the API's response.
      .then(data => setQuote(data.quote));
  };

  // The 'useEffect' hook is used here to run the 'fetchQuote' function once, 
  // immediately after the component is added to the DOM. 
  // The empty array [] means that the effect has no dependencies and will only run once.
  useEffect(() => {
    fetchQuote();
  }, []);

  // The component renders a 'Quote' component and a button.
  // The 'Quote' component is passed the current 'quote' as a prop.
  // The button, when clicked, fetches a new quote.
  return (
    <div className="quotes-list">
      <Quote quote={quote} />
      <button onClick={fetchQuote}>Refresh</button>
    </div>
  );
}

// This exports the 'QuotesList' component so it can be imported and used in other parts of the application.
export default QuotesList;


