import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { apiKey } from '../utils/constants';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState([]);

  useEffect(() => {
    getResultsFromSearch();
  }, [])

  useEffect(() => {
    getResultsFromSearch();
  }, [query])


  const getResultsFromSearch = async () => {
    const json = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=" + query + "&key=" + apiKey);
    const data = await json.json();
    setResults(data.items);
    console.log(data);
  }

  if (results.length === 0) return <p>No data for Results</p>;

  return (
    <div className="flex flex-col m-4">{
      results.filter((res) => res.id.kind === "youtube#video").map((result) =>
        <Link className="p-2"
          to={"/watch?v=" + result.id.videoId} >
          <div className="flex flex-row">
            <img className="w-[500px] h-[300px] bg-transparent rounded-xl" alt="video" src={result.snippet.thumbnails.high.url} />
            <div className="flex flex-col m-2 p-2">
              <h2 className="font-bold text-lg">{result.snippet.title} </h2>
              <p>{result.snippet.publishedAt}  </p>
              <p>{result.snippet.description}  </p>
            </div>
          </div>
        </Link>
      )
    }
    </div>
  )
}

export default Search;
