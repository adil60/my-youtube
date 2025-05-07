/* eslint-disable react/jsx-pascal-case */
import N_LevelComment from "./N_LevelComment"

const N_LevelNestedCommentList = () => {

    const commentsData = [
        {
            name: "Adil Raza",
            text: "This ia a comment",
            replies: []
        }, {
            name: "Adil Raza",
            text: "This ia a comment",
            replies: [
                {
                    name: "Adil Raza",
                    text: "This ia a Nested comment",
                    replies: []
                }, {
                    name: "Adil Raza",
                    text: "This ia a Nested comment",
                    replies: [
                        {
                            name: "Adil Raza",
                            text: "This ia a Nested comment",
                            replies: []
                        }
                    ]
                }
            ]
        }, {
            name: "Adil Raza",
            text: "This ia a comment",
            replies: [{
                name: "Adil Raza",
                text: "This ia a Nested comment",
                replies: []
            }]
        }
    ]


    return (
        <div>
            {commentsData.map((comment,index) =>
                <N_LevelComment key={index}  comment={comment} />
            )}
        </div>
    )
}

export default N_LevelNestedCommentList
