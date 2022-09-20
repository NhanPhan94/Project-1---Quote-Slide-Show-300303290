/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

const quotes = [
    {
        
        author: "Amanda Gorman",
        quote: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
        citation: "Facebook",
       

    },
    {
        
        author: "Booker T. Washington",
        quote: "If you want to lift yourself up, lift up someone else.",
       
        year: 2004
    },
      {
        
        author: "Cicely Tyson",
        quote: "I have learned not to allow rejection to move me.",
        citation: "Instagram",
        year:1994

      },
      {
        
        author: "A.A. Milne",
        quote: "You’re braver than you believe, stronger than you seem, and smarter than you think.",
        citation: "Facebook",
        year: 2007
      },
      {
        author: "Lupita Nyong'o",
        quote: "You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you.",
        citation: "Twitter",
        year: 2004
      },
      {
        
        author: "Winston Churchill",
        quote: "Attitude is the 'little' thing that makes a big difference.",
        citation: "Zalo",
        year: 1997
      },
      {
        
        author: "Rosa Parks",
        quote: "We will fail when we fail to try.",
        citation: "Tango",
        year:1995
      },
      {
        
        author: "Walt Disney",
        quote: "All our dreams can come true — if we have the courage to pursue them.",
        citation: "Tiktok",
        year: 2004
      }
  ];

//get button quote

const buttonQuote = document.getElementById('load-quote');
//get quote-box by id
const getQuoteBox = document.getElementById('quote-box');

/***
 * `getRandomQuote` function and return random quote
***/
function getRandomQuote (){
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}



/***
 * `printQuote` function
***/
function printQuote(){
    const randomQuote = getRandomQuote();
    let stringHtml = `<p class="quote">${randomQuote.quote}</p>
    <p class = "source">${randomQuote.author}`;

    //check if citation exist

    if(randomQuote.citation){
      stringHtml += `<span class = "citation">${randomQuote.citation}</span>`;
    }

    //check of year exist

    if(randomQuote.year){
      stringHtml += `<span class = "year">${randomQuote.year}</span>`;
    }

    stringHtml += `</p>`;

    getQuoteBox.innerHTML = stringHtml;
    
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
buttonQuote.addEventListener('click', printQuote);
