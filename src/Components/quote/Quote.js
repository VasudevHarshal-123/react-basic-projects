import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
// import { useQuoteContext } from "./QuoteContext";

function Quote() {
    const [quoteText, setQuoteText] = useState("");
    // const mounted = useRef();
    // const { 
    //     setLoaded,
    //     loaded,
    //     quote,
    //     setQuote
    // } = useQuoteContext();

    useEffect(() => {
        // if (!mounted.current) {
        axios.get('https://quotes.rest/qod')
            .then(response => {
                console.log(response.data.contents);
                // setQuote(response.data.contents.quotes[0].quote);
                setQuoteText(response.data.contents.quotes[0].quote);
            })
            .catch((error) => {
                console.log(error);
            });
        //     mounted.current = true;
        // } 
        // else {

        // }
    }, []);

    return (
        <div>
            {/* {quote} */}
            {quoteText}
        </div>
    )
}

export default Quote;