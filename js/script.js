/******************************************
Treehouse FSJS Techdegree Project 1 - A Random Quote Generator
Author: Amy Namdar
******************************************/

/*** 
 * `quotes` array 
 * 
 * Array which holds quote objects containing properties quote, source, citation, and year
 *
***/

const quotes = [
  {
    quote: "Double, double toil and trouble; Fire burn and caldron bubble.",
    source: "William Shakespeare",
    citation: " Macbeth: Song of the Witches",
    year: "1623",
    tag: "witch"

  },
  {
    quote: "Jack and Jill went up the hill, To fetch a pail of water; Jack fell down, and broke his crown. And Jill came tumbling after.",
    source: "John Newbery",
    citation: "Mother Goose's Melody",
    year: "1765",
    tag: "rhyme"
  },
  {
    quote: "Le doute est un état mental désagréable, mais la certitude est ridicule.",
    source: "Voltaire",
    citation: "Oeuvres Completes de Voltaire, Volume 12, Part 1",
    year: "1817",
    tag: "french"
  },
  {
    quote: "When the phone rang I was in the kitchen, boiling a potful of spaghetti and whistling along with an FM broadcast of the overture to Rossini's 'The Thieving Magpie,' which has to be the perfect music for cooking pasta.",
    source: "Haruki Murakami",
    citation: "The Wind-Up Bird Chronicle",
    year: "1997",
    tag: "literary"
  },
  {
    quote: "Toast cannot be explained by any rational means.",
    source: "Margaret Atwood",
    citation: "Oryx and Crake",
    year: "2003",
    tag: "literary"
  },
  {
      quote: `I am awaiting
  </br> perpetually and forever
  </br> a renaissance of wonder`,
      source: "Lawrence Ferlinghetti",
      citation: "A Coney Island of the Mind",
      year: "1958",
      tag: "poetry"
  },
  {
    quote: "Le doute est un état mental désagréable, mais la certitude est ridicule.",
    source: "Voltaire",
    citation: "Oeuvres Completes de Voltaire, Volume 12, Part 1",
    year: "1817",
    tag: "french"
  },
  {
    quote: "When the phone rang I was in the kitchen, boiling a potful of spaghetti and whistling along with an FM broadcast of the overture to Rossini's 'The Thieving Magpie,' which has to be the perfect music for cooking pasta.",
    source: "Haruki Murakami",
    citation: "The Wind-Up Bird Chronicle",
    year: "1997",
    tag: "literary"
  },
  {
    quote: "Toast cannot be explained by any rational means.",
    source: "Margaret Atwood",
    citation: "Oryx and Crake",
    year: "2003",
    tag: "literary"
  }
];

/***
 * `getRandomQuote` function
 * Function which returns a random quote by generating a random number between 
 * 1-4 and using it as the index of the item (quote) in the quotes array
 * todo: is there a way to ensure random quote is not same as previous?
***/

function getRandomQuote() {
  let randomQuoteNumber = Math.floor(Math.random() * (quotes.length));
  let randomQuote = quotes[randomQuoteNumber];

  console.log(`The random quote number is ${randomQuoteNumber}. The quote with that index is "${randomQuote.quote} by ${quotes[randomQuoteNumber].source}, ${randomQuote.citation}, ${randomQuote.year}, ${randomQuote.tag}"`);

  return randomQuote;
}

/***
 * `printQuote` function
 * Function which generates HTML representation of the quote object and 
 * inserts it into the quote-box element for display
***/

function printQuote() {
  let randomQuote = getRandomQuote(quotes);

  let quoteHTML = `<p class="quote">${randomQuote.quote}</p>
<p class="source">${randomQuote.source}`;

  if (randomQuote.citation != "") {
    let citationHTML = `<span class="citation">${randomQuote.citation}</span>`;
    quoteHTML += citationHTML;
  }

  if (randomQuote.year != "") {
    let yearHTML = `<span class="year">${randomQuote.year}</span>`;
    quoteHTML += yearHTML;
  }

  if (randomQuote.tag != "") {
    let tagHTML = `<span class="tag">${randomQuote.tag}</span>`;
    quoteHTML += tagHTML;
  }

  quoteHTML += "</p>"

  document.getElementById('quote-box').innerHTML = quoteHTML;

  setRandomBackgroundColor();

}

/***
 * `refreshQuote` function
 * Function which generates HTML representation of the quote object and 
 * inserts it into the quote-box element for display
***/

function refreshQuote() {

  // The number of words in the random quote - splits quote string into separate words separated by ' ' 
  //let numberOfWords = quote.quote.split(' ').length;
  //console.log(numberOfWords);

  // Call the printQuote function every 6000 milliseconds (6 seconds)
  setInterval(printQuote, 6000);

}

/***
 * `setRandomBackgroundColor` function
 * Function which updates the background color to a random color by updating the css 
 * body background-color property with the randomly-generated background color
***/

function setRandomBackgroundColor() {

  /***  Generate the random hexadecimal color code adapted from:
  * Adapted from source (my version uses template literal and updates to use 
  * substring method instead of deprecated .substr): 
  * https://dev.to/andylacko/comment/1jmi1
  */

  let randomHexColor = `#${Math.random().toString(16).substring(2, 6)}`
  document.body.style.backgroundColor = randomHexColor;
}

/** Call printQuote function
*/
printQuote();

/** Call refreshQuote function - this refreshes the quote and starts the countdown to the next refresh
*/
refreshQuote();

/*** 
 * click event listener for the "Show another quote" button
 * When the user clicks the "Show another quote" button, this invokes the printQuote function
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

