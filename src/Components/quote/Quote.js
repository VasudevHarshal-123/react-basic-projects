import React, { useState, useEffect, useRef } from 'react';
import {fetchRandomQuote} from "./QuoteClient";
import "./styles/Quote.css";

function Quote() {
    const [quoteText, setQuoteText] = useState("");

    useEffect(() => {
        fetchRandomQuote(setQuoteText);
    },[]);

    const getDisplayQuote = () =>{
        return(
            <div className="quote-display-wrapper">
                <h1>{quoteText}</h1>
            </div>
        )
    }

    const refreshQuoteCTA = () =>{
        return <div className="quote-refresh" onClick={()=>fetchRandomQuote(setQuoteText)}>Refresh</div>
    }

    return (
        <div className="quote-wrapper">
            {getDisplayQuote()}
            {refreshQuoteCTA()}
        </div>
    )
}

export default Quote;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from "axios";
// import { useQuoteContext } from "./QuoteContext";

// function Quote() {
//     // const [quoteText, setQuoteText] = useState("");
//     const mounted = useRef();
//     const { 
//         setLoaded,
//         loaded,
//         quote,
//         setQuote
//     } = useQuoteContext();

//     useEffect(() => {
//         if (!mounted.current) {
//         axios.get('https://quotes.rest/qod')
//             .then(response => {
//                 console.log(response.data.contents);
//                 setQuote(response.data.contents.quotes[0].quote);
//                 // setQuoteText(response.data.contents.quotes[0].quote);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//             mounted.current = true;
//         } 
//         else {
//             //componentDidUpdate
//         }
//     },[]);

//     return (
//         <div>
//             {quote}
//             {/* {quoteText} */}
//         </div>
//     )
// }

// export default Quote;































