import { useState, useEffect } from 'react';
import API_KEY from '../key';

const contextKey = 'ab9771d658efc8801';

const UseGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${contextKey}&q=${term}`
            )
                .then(response => response.json())
                .then(result => setData({ result }))
        }
        fetchData();
    }, [term])


    return { data }
};

export default UseGoogleSearch;

// https://www.googleapis.com/customsearch/v1?key=AIzaSyC33v4CX1dLGyZsN8At7mW98mzXlboi6iM&cx=ab9771d658efc8801&q=alonemusk