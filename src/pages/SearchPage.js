import React from 'react';
import { useStateValue } from '../StateProvider';
import './SearchPage.css'
import UseGoogleSearch from '../components/UseGoogleSearch';
import response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue();
    // LIVE API CALL

    const { data } = UseGoogleSearch(term);

    // MOCK API CALL
    // const data = response;

    // https://developers.google.com/custom-search/v1/using_rest
    // https://cse.google.com/cse/create/new

    return (
        <div className='searchPage'>
            <div className="searchPageHeader">
                <Link to="/">
                    <img className="searchpageLogo" src="https://t3.ftcdn.net/jpg/03/99/98/60/360_F_399986042_9iSLYUNyDv8npaKP31xsIpDVFjfqGLDF.jpg" />
                </Link>

                <div className="searchPageHeaderBody">
                    <Search hideButtons />

                    <div className="searchPageOptions">
                        <div className="searchPageOptionsLeft">

                            <div className="searchPageOption">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>

                            <div className="searchPageOption">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>

                            <div className="searchPageOption">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>

                            <div className="searchPageOption">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>

                            <div className="searchPageOption">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>

                            <div className="searchPageOption">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        <div className="searchpageOptionsRight">

                            <div className="searchPageOption">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPageOption">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {term && data && (
                <div className="searchPageResults">
                    <p className="searchPageResultCount">
                        About {data.searchInformation?.formattedTotalResults} results ({data.searchInformation?.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items?.map(item => {
                        return (
                            <div className="searchpageResult" key={item.link}>
                                <a className="searchPageResultLink" href={item.link}>
                                    {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                        <img className="searchPageImage" src={item.pagemap?.cse_image?.length > 0 &&
                                            item.pagemap?.cse_image[0]?.src} alt="" />
                                    )}
                                    {item.displayLink}

                                </a>

                                <a href={item.link} className="searchResultTitle">
                                    <h2>{item.title}</h2>
                                </a>
                                <p className="searchPageResultSnippet">
                                    {item.snippet}
                                </p>
                            </div>
                        )
                    })}


                </div>
            )
            }

        </div >
    );
};

export default SearchPage;
