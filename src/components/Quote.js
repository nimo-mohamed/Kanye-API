// First, you're importing the React object from the 'react' library. This is necessary for any React component.
import React from 'react';

// Here, you're defining a functional component named 'Quote'. 
// It's using ES6 destructuring to get the 'quote' prop directly.
function Quote({ quote }) {
  return (
    // This is the JSX (JavaScript XML) returned by the component. JSX allows you to write HTML-like code in JavaScript.
    <div className="quote">
      
      
       {/* // This is an image element. The 'src' attribute is set to an image of Kanye West. 
      // 'alt' attribute is for accessibility, it provides a text description of the image. */}
      <img src="https://i.pinimg.com/1200x/2e/aa/fd/2eaafdcf38154a4fe8bbe41797ee2211.jpg" alt="Kanye West" />
      
      {/* // Here, you're displaying the 'quote' passed as a prop to this component inside a paragraph tag. */}
      <p>{quote}</p>
      
    </div>
  );
}

// Finally, you're exporting the 'Quote' component, so it can be imported and used in other parts of your app.
export default Quote;

