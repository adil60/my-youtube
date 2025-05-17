/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useSearchParams } from 'react-router';
import { closeMenu } from '../utils/appSlice';
import Comments from './Comments';
import N_LevelNestedCommentList from './N_LevelNestedCommentList';
import LiveChat from './LiveChat';
import { apiKey } from '../utils/constants';

const WatchVideo = () => {

    const [searchParams] = useSearchParams();
    const [videoData, setVideoData] = useState(null);
    const [comments, setComments] = useState([]);
    const [liveChat, isLiveChat] = useState(false);
    const [ relatedVideos , setRelatedVideos] = useState([]);
    const dispatch = useDispatch();
    const vidoeId = searchParams.get("v");


    const videoUrl = "https://www.youtube.com/embed/" + vidoeId + "?autoplay=1&mute=1";

    useEffect(() => {
        dispatch(closeMenu());
        getVideoData();
        getComments();
        //getRelatedVideos();
    }, [])

    const getVideoData = async () => {
        const videoDataUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + vidoeId + "&key=" + apiKey;
        const data = await fetch(videoDataUrl);
        const json = await data.json();
        setVideoData(json?.items[0]);
    }

    const getComments = async () => {
        const commentsUrl = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" + vidoeId + "&key=" + apiKey;
        const json = await fetch(commentsUrl);
        const data = await json.json();
        setComments(data?.items);
    }

    const getRelatedVideos = async () => {
        const json = await fetch("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&part=snippet&relatedToVideoId=" + vidoeId + "&type=video&maxResults=15");
        const data = await json.json();
        //setRelatedVideos(data.);
    }


    if (videoData === null) return <>Loading...</>

    return (
        <div className='ml-16 flex flex-row'>
            <div className='w-7/12 ml-8 '>
                <div>
                    <iframe width="750" height="400" className='mt-3 rounded-2xl hover:play'
                        src={videoUrl + "?autoplay=1"}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                    <h2 className='font-bold text-2xl m-2'>{videoData?.snippet.title} </h2>
                </div>
                <div className='m-2 p-2'>
                    <p className='font-bold text-xl m-2'>
                        {videoData.statistics.commentCount} Comments</p>
                    {/* Comments from actual Youtube API */}
                    {comments.map((comment) =>
                        <Comments data={comment} />
                    )}
                    {/* N-level nested comments
                    <N_LevelNestedCommentList />  
                    */}
                </div>
            </div>
            <div className='w-[400px]  h-[400px] ml-10 p-1 mt-2'>
                {liveChat && <LiveChat />}
                <div className='flex flex-col'>
                        {relatedVideos.length>0 &&
                            relatedVideos.map( (video) => <Link to={"/watch?v=" + video.id} >
                            <div className="flex flex-row">
                                <img className='w-44 h-24' src='' alt='img' />
                                <div className='flex-col'>
                                    <p className='font-bold'> Title  </p>
                                    <p className='font-extralight'> Channel Name  </p>
                                    <p className='font-extralight'> views • date  </p>
                                </div>
                            </div>
                            </Link>  )
                        }
                </div>
            </div>
        </div>
    )
}

export default WatchVideo
