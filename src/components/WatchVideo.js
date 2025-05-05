/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';
import { closeMenu } from '../utils/appSlice';
import Comments from './Comments';
import N_LevelNestedCommentList from './N_LevelNestedCommentList';

const WatchVideo = () => {

    const [searchParams] = useSearchParams();
    const [videoData, setVideoData] = useState(null);
    const [comments, setComments] = useState([]);
    const dispatch = useDispatch();

    const videoUrl = "https://www.youtube.com/embed/" + searchParams.get("v") + "?si=LcWKomSk4VWnbFZ9";

    useEffect(() => {
        dispatch(closeMenu());
        getVideoData();
        //getComments();
    }, [])

    const getComments = async () => {
        const commentsUrl = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" + searchParams.get("v") + "&key=AIzaSyAl-wGqWEM1n1SsET1bPtNLWC0vInmA9wE";
        const json = await fetch(commentsUrl);
        const data = await json.json();
        setComments(data?.items);
    }

    const getVideoData = async () => {
        const videoDataUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + searchParams.get("v") + "&key=AIzaSyAl-wGqWEM1n1SsET1bPtNLWC0vInmA9wE";
        const data = await fetch(videoDataUrl);
        const json = await data.json();
        setVideoData(json?.items[0]);
        console.log(comments);

    }

    if (videoData === null) return <>Loading...</>

    return (
        <div className='mx-16 grid grid-flow-col'>
            <div className='w-7/12 ml-8 '>
                <div>
                    <iframe width="700" height="400" className=' mt-3 rounded-2xl'
                        src={videoUrl}
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
                    */}
                    <N_LevelNestedCommentList />  
                </div>
            </div>
            <div className='m-4 p-4 '>
                Shorts
            </div>
        </div>
    )
}

export default WatchVideo
