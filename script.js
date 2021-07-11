// Selecting DOM
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const facebookButton = document.getElementById("facebook");
const newQuoteButton = document.getElementById("new-quote");
const quoteIcon      = document.getElementById("quote-icon");
// global variable API quotes
let apiQuotes = [];
// Show New quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];//
    // check author is Unknown
    if(!quote.author){
        console.log("Yes");
        authorText.textContent = "Unknown";
    }else{
        authorText.textContent = quote.author;
    }
    // Check quote length is long
    if(quote.text.length > 75){
        quoteText.classList.add('long-quote');
        quoteIcon.classList.add('long-quote-icon');
    }else{
        quoteText.classList.remove('long-quote');
        quoteIcon.classList.remove('long-quote-icon');
    }
    quoteText.textContent  = quote.text;
}
//Fetch async from api to get quote
async function getQuote() {
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //catch error if there's any problem with fetching data from API URL
  }
}

function tweetQuote(){
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}
// Event Listener
newQuoteButton.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);
facebookButton.addEventListener("click", facebookShare);
function facebookShare(){
    const facebookURL = `http://www.facebook.com/sharer.php?s=100&p[title]=SharingQuotes&p[url]=${window.location}[summary]=${quoteText.textContent}`;
    window.open(facebookURL, '_blank');
}
// Run get quote function
getQuote();
