import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import VideoCard from './VideoCard';
import { apiKey } from '../utils/constants';

const Results = () => {
    const [searchQuery] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const searchList = [];
    const query = searchQuery.get("q");
    useEffect(() => {
        getSearchQueryResults();
    }, [])

    // useEffect( ()=> { 
        
    // },
    // [searchResults])

    const getSearchQueryResults = async () => {
        const json = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=" + query + "&key="+apiKey );
        const data = await json.json();
        // process
        data.items.map((result) => {
            const list = {
                id : result.id.videoId,
                thumbnailsUrl : result.snippet.thumbnails.medium.url,
                title : result.snippet.title,
                viewCount : 100,
                publishedAt : result.snippet.publishedAt
        }
        searchList.push(list);
    } )
        setSearchResults(searchList);
    }

    if(searchResults.length===0) return;

    return (
        <div className="flex flex-wrap">
            {searchResults.map((video) => 
                <Link to={"/watch?v=" + video.id} className="w-[30%]"><VideoCard key={video.id} data={video} /></Link>
            )
            }
        </div>
    )
}

export default Results
