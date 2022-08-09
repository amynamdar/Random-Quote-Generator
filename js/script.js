/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote:"Double, double toil and trouble; Fire burn and caldron bubble.",
    source:"William Shakespeare",
    citation:" Macbeth: Song of the Witches",
    year: "1623"

  },
  {
    quote:"Jack and Jill went up the hill, To fetch a pail of water; Jack fell down, and broke his crown. And Jill came tumbling after.",
    source:"John Newbery",
    citation:"Mother Goose's Melody",
    year: "1765"
  },
  {
    quote:"Le doute est un état mental désagréable, mais la certitude est ridicule.",
    source:"Voltaire",
    citation:"Oeuvres Completes de Voltaire, Volume 12, Part 1",
    year: "1817"
  },
  {
    quote:"When the phone rang I was in the kitchen, boiling a potful of spaghetti and whistling along with an FM broadcast of the overture to Rossini's 'The Thieving Magpie,' which has to be the perfect music for cooking pasta.",
    source:"Haruki Murakami",
    citation:"The Wind-Up Bird Chronicle",
    year: "1997"
  },
  {
    quote:"Toast cannot be explained by any rational means.",
    source:"Margaret Atwood",
    citation:"Oryx and Crake",
    year: "2003"
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote(quotes){
  let randomQuoteNumber = Math.floor(Math.random()*(quotes.length));
  let randomQuote = quotes[randomQuoteNumber];
  console.log(`The random quote number is ${randomQuoteNumber}. The quote with that index is "${randomQuote.quote} by ${quotes[randomQuoteNumber].source}, ${randomQuote.citation}, ${randomQuote.year}"`);
  return randomQuote;
}

// console.log(getRandomQuote(quotes));


/***
 * `printQuote` function
***/

function printQuote(quotes){
let randomQuote = getRandomQuote(quotes);
//console.log(randomQuote);

let quoteHTML = `<p class="quote">${randomQuote.quote}</p>
<p class="source">${randomQuote.source}`;



if(randomQuote.citation != ""){
 console.log("has a citation");
 let citationHTML = `<span class="citation">${randomQuote.citation}</span>`;
 quoteHTML+= citationHTML;
}

if(randomQuote.year != ""){
  console.log("has a year");
  let yearHTML = `<span class="year">${randomQuote.year}</span>`;
  quoteHTML += yearHTML;
}

quoteHTML += "</p>"
console.table(quoteHTML);

document.getElementById('quote-box').innerHTML = quoteHTML;
}

printQuote(quotes);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//document.getElementById('load-quote').addEventListener("click", printQuote, false);
//console.log("Testing: 1-2-3! The script is connected to the HTML!");

