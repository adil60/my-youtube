import { useEffect, useState } from "react"
import { YOUTUBE_POPULAR_API_50_RES } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

  const [videosData, setVideosData] = useState([]);
  const vidoesList = [];

  useEffect(() => {
    getVideos();
    //window.addEventListener("scroll" , handleOnScroll  );
  }, [])

  const handleOnScroll= ()=> {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 500){
      console.log("On Scroll")
    }
  }

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_API_50_RES);
    const json = await data.json();
    json?.items?.map((video) => {
      const list = {
        id:  video.id ,
        title: video.snippet.title,
        thumbnailsUrl: video.snippet.thumbnails.medium.url,
        publishedAt: video.snippet.publishedAt ,
        viewCount: video.statistics.viewCount
      }
      vidoesList.push(list);
    })
    setVideosData(vidoesList);
  }

  return (
    <div className="flex flex-wrap">
      {videosData.map((video) =>
        <Link to={"/watch?v=" + video.id} className="w-[30%]"><VideoCard key={video.id} data={video}  /></Link>)}
    </div>
  )
}

export default VideoContainer

