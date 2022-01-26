import React, { useState } from 'react';
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core"
import { useHistory } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
    const [{ }, dispatch] = useStateValue();
    const [query, setQuery] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        console.log("you hit Search >> ", query);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: query,
        })

        // DO SOMETHING WITH THE INPUT ...... TODO

        history.push('/search');
    }

    return (
        <form className='search'>
            <div className="searchInput">
                <SearchIcon className="searchInputIcon" />
                <input value={query} onChange={e => setQuery(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (<div className="searchButtons">
                <Button type='submit' onClick={search} variant="outlined">GOOGLE SEARCH</Button>
                <Button variant="outlined">I'M FEELING LUCKY </Button>
            </div>) : (<div className="searchButtons">
                <Button type='submit' className='searchButtonhidden' onClick={search} variant="outlined">GOOGLE SEARCH</Button>
                <Button className='searchButtonhidden' variant="outlined">I'M FEELING LUCKY </Button>
            </div>)}

        </form>
    )
}

export default Search;
