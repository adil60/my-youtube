const Comments = ({data}) => {
    console.log(data);
    return (
        <div className='m-2 p-2 flex flex-row'>
            <img className='rounded w-10 h-10'
                src={data.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='authorProfileImageUrl' />
            <div className='mx-4'>
                <h4 className='font-bold' > {data.snippet.topLevelComment.snippet.authorDisplayName} </h4>
                <p>
                    {data.snippet.topLevelComment.snippet.textOriginal}
                </p>
            </div>
        </div>
    )
}

export default Comments
