import { useState, useEffect} from 'react';
import bgImage from '../assets/bg.jpg'
import './App.css';

function App() {

  // to manipulate the random quote
  const [randomQuote, setRandomQuote] = useState(
      { text : "The way we communicate with others and with ourselves ultimately determines the quality of our lives.", 
        author : "Tony Robbins"
      }
    );
  
  // to manipulate the quotes that we will receive from the API
  const [quotesState, quotesSetState] = useState([]);
  
  // to handle quotes api call errors
  const [apiError, setApiError] = useState(false);

  // to manipulate the background images that we will receive from the API
  const [bgImages, setBgImgages] = useState([]);

  // to manipulate the background image of the body
  const [bodyBgImage, setBodyBgImage] = useState(bgImage);
  document.body.style.backgroundImage = `url(${bodyBgImage})`;
  useEffect(() => {

    // fetch quotes
    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
          quotesSetState(data);
          
        })
        .catch(()=>{
          setApiError(true);
          setRandomQuote({text : "We have issues with our database. Come back later :)", author : "The Developer"})
        });

    // fetch background images
    fetch(`https://pixabay.com/api/?key=19829269-60c1bb959fa930d104d880ae3`)
    .then(response => response.json())
    .then(images =>{
        images = images.hits.map(image => image.largeImageURL);
        setBgImgages(images)
      }
    )
    // if we could not retrieve images from the API
    .catch(() => {setBgImgages([bgImage])});
    }
  , []);

  function generateNewQuote(){
    if(quotesState.length > 0 ){
      setBodyBgImage(bgImages[Math.floor(Math.random()*bgImages.length)]);
      setRandomQuote(quotesState[Math.floor(Math.random()*quotesState.length)]);
      

    }
  }

  function generateNewAuthorQuote(authorName){
    setBodyBgImage(bgImages[Math.floor(Math.random()*bgImages.length)]);
    const filtredQuotes = quotesState.filter(quote => quote.author === authorName);
    setRandomQuote(filtredQuotes[Math.floor(Math.random()*filtredQuotes.length)]);
    
  }

  return (
    <div id="app">
      <div className="quote-author">
        <p className = "quote">"{randomQuote.text}"</p>
        <p className = "author">by {randomQuote.author ? randomQuote.author : "Unknown author"}</p>
        
      </div>
      {!apiError && 
        <div className="buttons-container">
          {
            randomQuote.author && <button 
                                    className = "new-quote-button"
                                    onClick ={()=>generateNewAuthorQuote(randomQuote.author)}
                                  >
                                    More of {randomQuote.author.split(' ')[0]}
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
