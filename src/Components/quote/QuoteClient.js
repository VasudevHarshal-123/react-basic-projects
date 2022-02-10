import axios from "axios";

function fetchRandomQuote(setQuoteText) {
    axios.get('https://api.quotable.io/random')
            .then(response => {
                setQuoteText(response.data.content);
            })
            .catch((error) => {
                console.log(error);
            });
}

export {
    fetchRandomQuote
}