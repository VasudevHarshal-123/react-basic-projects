import axios from "axios";

function fetchRandomQuote(setQuoteText) {
    axios.get('https://api.quotable.io/random')
            .then(response => {
                console.log(response.data.content);
                setQuoteText(response.data.content);
            })
            .catch((error) => {
                console.log(error);
            });
}

export {
    fetchRandomQuote
}