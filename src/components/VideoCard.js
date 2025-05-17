
const VideoCard = ({ data }) => {

  
  const { id, thumbnailsUrl, title,publishedAt,viewCount } = data;
  
  
  return (
    <div
     className="m-2 p-2 cursor-pointer rounded-2xl  hover:shadow-2xl" >
      <img className="rounded-xl" src={thumbnailsUrl} alt='thumbnail' />
      <div className="h-auto">
        <h3 className="font-bold text-lg">{title} </h3>
        <p>{viewCount} views • {publishedAt} </p>
      </div> 
    </div>
  )
}

export default VideoCard;
