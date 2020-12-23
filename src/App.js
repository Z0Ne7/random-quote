import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import { API_URL } from './constants/serviceTypes';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './actions/quoteAction';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ];
  const dispatch = useDispatch();
  const { quoteReducer } = useSelector((state) => state);
  let quotesData;
  let currentQuote = '';
  let currentAuthor = '';

  const getRandomQuote = () => {
    return quotesData.quotes[
      Math.floor(Math.random() * quotesData.quotes.length)
    ];
  };
  const getQuote = () => {
    dispatch(action.getRandomQuote());
    let randomQuote = getRandomQuote();
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;
    setQuote(currentQuote);
    setAuthor(currentAuthor);
    // console.log(randomQuote);
  };

  useEffect(() => {
    dispatch(action.getQuotes());
  });

  return (
    <div className='flex justify-center items-center font-sans h-screen bg-green-300'>
      <div className='relative rounded w-450 py-10 px-12 table bg-white'>
        <div className='text-center w-450 h-auto clear-both font-normal  text-3xl text-green-500'>
          <i className='mr-3'>
            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
          </i>
          <span>{quote}</span>
        </div>
        <div className='w-450 h-auto clear-both pt-5 text-base text-right text-green-500'>
          - <span>{author}</span>
        </div>
        <div className='w-450 m-auto block'>
          <a
            href='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Education%20costs%20money.%20%20But%20then%20so%20does%20ignorance.%22%20Sir%20Claus%20Moser'
            title='Tweet this quote!'
            target='_blank'
            rel='noreferrer'
            className='float-left p-0 pt-2 text-center text-xl mr-1.25 h-7.5 w-10 bg-green-500 border-none rounded text-white outline-none opacity-100 cursor-pointer mt-7'
          >
            <i>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </i>
          </a>
          <a
            href='https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Sir%20Claus%20Moser&content=Education%20costs%20money.%20%20But%20then%20so%20does%20ignorance.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
            title='Post this quote on tumblr'
            target='_blank'
            rel='noreferrer'
            className='float-left p-0 pt-2 text-center text-xl mr-1.25 h-7.5 w-10 bg-green-500 border-none rounded text-white outline-none opacity-100 cursor-pointer mt-7'
          >
            <i>
              <i>
                <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon>
              </i>
            </i>
          </a>
          <button
            className='float-right h-9 rounded text-white bg-green-500 outline-none px-4 pt-2 pb-1.5 mt-7 text-sm cursor-pointer opacity-100'
            onClick={getQuote}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
