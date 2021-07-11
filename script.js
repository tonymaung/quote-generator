
// global variable API quotes
let apiQuotes = [];
// Show New quote
function NewQuote(apiQuotes){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote);
}
//Fetch async from api to get quote 
async function getQuote(){
    const apiURL = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        NewQuote(apiQuotes);
    }catch(error){
        //catch error if there's any problem with fetching data from API URL
    }
}

// Run get quote function
getQuote();