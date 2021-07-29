import { useState, useEffect} from 'react';
import bg from '../assets/bg.jpg'
import './App.css';

function App() {
  
  document.body.style.backgroundImage = `url(${bg})`;

  const [quoteState, setQuoteState] = useState(
      { text : "The way we communicate with others and with ourselves ultimately determines the quality of our lives.", 
        author : "Tony Robbins"
      }
    );
  const [quotesState, quotesSetState] = useState([]);
  
  // to handle api call error
  const [apiError, setApiError] = useState(false);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
          quotesSetState(data);
          
        })
        .catch(()=>{
          setApiError(true);
          setQuoteState({text : "We have issues with our database. Come back later :)", author : "The Developper"})
        })
   
    }
  , []);
  function generateNewQuote(){
    if(quotesState.length > 0 ){
      setQuoteState(quotesState[Math.floor(Math.random()*quotesState.length)]);
    }
    

  }
  function generateNewAuthorQuote(authorName){
    const filtredQuotes = quotesState.filter(quote => quote.author === authorName);
    setQuoteState(filtredQuotes[Math.floor(Math.random()*filtredQuotes.length)]);
  }
  return (
    <div id="app">
      <div className="quote-author">
        <p className = "quote">"{quoteState.text}"</p>
        <p className = "author">by {quoteState.author ? quoteState.author : "Unknown author"}</p>
        
      </div>
      {!apiError && 
        <div className="buttons-container">
          {
            quoteState.author && <button 
                                    className = "new-quote-button"
                                    onClick ={()=>generateNewAuthorQuote(quoteState.author)}
                                  >
                                    More of {quoteState.author.split(' ')[0]}
                                  </button>
          }
          
          
          <button 
            className = "new-quote-button"
            onClick ={generateNewQuote}
          >
            New quote
          </button>
        </div>
      }
    </div>
      
  );
}

export default App;
