/* eslint-disable react/jsx-pascal-case */
const N_LevelComment = ( {comment} ) => {

    const { name , text , replies} = comment;
  return (
    <div className="flex m-1 p-1">
      <img className="h-10 w-10 border border-black rounded-full"
       src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      alt="comment" /> 
      <div className="mx-2 px-1">
        <p className="font-bold">{name} </p>
        <p>{text} </p>
        { replies.map((reply,index) => <N_LevelComment key={index} comment={reply} />  )  }
      </div>
    </div>
  )
}

export default N_LevelComment
