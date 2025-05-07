import React, { useEffect, useState } from 'react'
import { yt_logo, hamburger_logo, user_icon, YOUTUBE_SUGGEST_SEARCH_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenuButton } from '../utils/appSlice';
import { postCacheResults } from '../utils/searchSlice';
import { apiKey } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cacheResults = useSelector(store => store.search);
  
  const toggleMenu = () => {
    dispatch(toggleMenuButton());
  }

  useEffect(() => {

    const timer = setTimeout(() => {

      if(search.trim()==="") return;
      if (cacheResults[search]) {
        setSuggestions(cacheResults[search]);
      } else {
        getSearchResults();
      }
    }, 200)

    return () => {
      clearTimeout(timer);
    }

  }, [search])

  const getResultsFromSearch = async(query) => {
    const json = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+query+"&key="+ apiKey);
    const data = await json.json();
  }

  const getSearchResults = async () => {
    const json = await fetch(YOUTUBE_SUGGEST_SEARCH_API + search);
    const data = await json.json();
    dispatch(postCacheResults(
      {
        [search]: data[1]
      }
    ))
    setSuggestions(data[1])
  }

  return (
    <div className='grid grid-cols-12 p-4'>
      <div className='col-span-2 flex'>
        <img className='h-8 cursor-pointer' alt='menu' src={hamburger_logo} onClick={toggleMenu} />
        <a href="/"> <img className='h-8' alt='youtube-logo'
          src={yt_logo} /></a>
      </div>
      <div className='col-span-9  flex flex-row justify-center' >
        <input className='px-4 w-8/12 border border-black rounded-l-full active:border-blue-500'
          type='search' placeholder='Search'
          value={search}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onChange={(e) => setSearch(e.target.value)} />
        <p className='rounded-r-full p-2 border border-black px-2'>
          🔍</p>
        {showSuggestions &&
          <  div className='mt-10 fixed shadow rounded-lg bg-white w-[45rem]'>
            {suggestions.length > 0 &&
              suggestions.map((suggest) => <p className='p-1 m-2 hover:bg-gray-200' 
              onMouseDown={() => getResultsFromSearch(suggest)}
              >🔍  {suggest}</p>
              )}
          </div>}

      </div>
      <div className='col-span-1 flex justify-end '>
        <img className='h-8' src={user_icon} alt='user' />
      </div>
    </div>
  )
}

export default Header