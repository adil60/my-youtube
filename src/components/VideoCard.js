
const VideoCard = ({ data }) => {


  const { id, snippet, statistics } = data;
  return (
    <div className="m-2 p-2 cursor-pointer  hover:shadow-2xl" >
      <img src={snippet.thumbnails.medium.url} alt='thumbnail' />
      <div className="h-auto">
        <h3 className="font-bold text-lg">{snippet.localized.title} </h3>
        <p>{statistics.viewCount} views • {snippet.publishedAt} </p>
      </div>
    </div>
  )
}

export default VideoCard;
