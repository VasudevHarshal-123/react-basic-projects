import React, { useState, useEffect, useRef } from "react";
import { fetchRandomQuote } from "./QuoteClient";
import "./styles/Quote.css";

function Quote() {
    const [quoteText, setQuoteText] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        fetchRandomQuote(setQuoteText);
    }, []);


    const getDisplayQuote = () => {
        let darkClass = isDarkMode ? "quote-display-wrapper-dark" : "";
        return (
            <div className={"quote-display-wrapper " + darkClass}>
                <h1>{quoteText}</h1>
            </div>
        );
    };

    const refreshQuoteCTA = () => {
        return (
            <div className="quote-refresh" onClick={() => fetchRandomQuote(setQuoteText)}>
                Refresh
            </div>
        );
    };

    const getDarkModeCTA = () => {
        return <div onClick={()=>setIsDarkMode(!isDarkMode)} className="quote-dark-mode">
            Glow
        </div>
    }

    const getCTAs = () =>{
        return <div className="quote-CTA-wrapper">
            {refreshQuoteCTA()}
            {getDarkModeCTA()}
        </div>
    }

    return (
        <div className="quote-wrapper">
            {getDisplayQuote()}
            {getCTAs()}
        </div>
    );
}

export default Quote;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from "axios";
// import { useQuoteContext } from "./QuoteContext";

// function Quote() {
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
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//             mounted.current = true;
//         }
//         else {
//             //componentDidUpdate logic
//         }
//     },[]);

//     return (
//         <div>
//             {quote}
//         </div>
//     )
// }

// export default Quote;
