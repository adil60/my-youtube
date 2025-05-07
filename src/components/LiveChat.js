import { useDispatch, useSelector } from "react-redux"
import { addLiveChat } from "../utils/liveSlice";
import { generateName, generateText } from "../utils/helper";
import { useEffect, useState } from "react";

const LiveChat = () => {

    const dispatch = useDispatch();
    const livedata = useSelector(store => store.live.chats);
    const [text, setText ] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const name = generateName();
            const text = generateText(20);
            dispatch(addLiveChat({ name, text }));
        }, 30000)

        return ()=> {
            clearInterval(interval);
        }
    }, [])

    const sendTexttoLive = (e) => {
        e.preventDefault();
        const name = "Adil"
        if(text.trim()){
        dispatch(addLiveChat({name, text}))
        setText(""); }
    }

    return (
        <div>
        <div className='bg-slate-50 h-[400px]  overflow-y-auto  border border-gray-200 rounded-2xl p-2
        flex flex-col-reverse'>
            {livedata.map(chat =>
                <div className='flex items-center hover:bg-gray-200'>
                    <img className="h-8 w-8"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                        alt="live" />
                    <p className='font-bold p-1 m-1' >{chat.name} </p>
                    <p className='p-1 m-1'>{chat.text} </p>
                </div>
            )}
        </div>
        <form onSubmit={sendTexttoLive}
        className="flex mx-2 px-2 shadow-lg rounded-lg border border-gray-200">
            <input type="text" placeholder="Chat" 
            className={"w-64 m-1" }
             value={text} 
            onChange={(e)=> setText(e.target.value) }
            />
            <button type="submit"
            className= "m-1 w-20 bg-green-200 text-center rounded hover:bg-green-300" 
             > Send</button>
        </form>
        </div>
    )
}

export default LiveChat
