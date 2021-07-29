

import { useState, useEffect} from 'react';
import bg from './bg.jpg'
import './App.css';

function App() {
  
  document.body.style.backgroundImage = `url(${bg})`;

  const [quoteState, setQuoteState] = useState('{text : "The way we communicate with others and with ourselves ultimately determines the quality of our lives.", author : "Tony Robbins"}');
  const [quotesState, quotesSetState] = useState('');
  
  
  useEffect(() => {
      fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => {
        quotesSetState(data)
        setQuoteState(data[Math.floor(data.length*Math.random())])
        
      })
    }
  , []);


  function generateNewQuote(){
    setQuoteState(quotesState[Math.floor(Math.random()*quotesState.length)]);

  }
  return (
    <div id="app">
      
      <p className = "quote">"{quoteState.text}"</p>
      <p className = "author">by {quoteState.author ? quoteState.author : "Unknown author"}</p>
      <button 
        className = "new-quote-button"
        onClick ={generateNewQuote}
      >
        New quote
      </button>
    </div>
  );
}

export default App;
