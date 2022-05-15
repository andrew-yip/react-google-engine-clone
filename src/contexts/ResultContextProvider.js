import React, { createContext, useContext, useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ( {children} ) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Software Engineer');

    // /videos, /search, /images
    // to make api calls
    const getResults = async (type) => {

        // set loading to true (to fetch data from api call)
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
              },
        });

        const data = await response.json();

        if (type.includes('/news')){
            setResults(data.entries);
        } else if (type.includes('/images')) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }


        //console.log(data);
        //setResults(data);
        setIsLoading(false);

    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);