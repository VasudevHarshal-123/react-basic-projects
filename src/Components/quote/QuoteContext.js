import React, { useContext, useState, createContext  } from "react";

const QuoteContext = createContext(); 
//Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

export function useQuoteContext() {
    return useContext(QuoteContext);
}

export function QuoteContextProvider ({ children }) {
    const [loaded, setLoaded] = useState(true);
    const [quote, setQuote] = useState("");
    const value = {
        setLoaded,
        loaded,
        quote, 
        setQuote
    };
    return (
        <QuoteContext.Provider value={value}>
            {children}
        </QuoteContext.Provider>
        //Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
    );

}