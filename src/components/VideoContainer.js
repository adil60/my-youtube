import { useEffect, useState } from "react"
import { YOUTUBE_POPULAR_API_50_RES } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_API_50_RES);
    const json = await data.json();
    setVideosData(json.items);
  }

  return (
    <div className="flex flex-wrap">
      {videosData.map((video) =>
         <Link to={"/watch?v="+ video.id} className="w-[30%]"><VideoCard key={video.id} data={video} /></Link>)}
    </div>
  )
}

export default VideoContainer

