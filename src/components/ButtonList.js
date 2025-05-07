import { useEffect, useState } from "react"
import Button from "./Button"
import { VIDEO_CATEGORIES } from "../utils/constants"


const ButtonList = () => {

  const [buttonItems , setButtonItems] = useState([]);

  useEffect(()=> {
    getVideoRec();
  },[] )

const getVideoRec = async() => {
  const json = await fetch(VIDEO_CATEGORIES);
  const data = await json.json();
  const trimData = data.items.slice(0,15);
  setButtonItems(trimData);
}
  return (
    <div className="flex flex-row m-4 overflow-x-auto">
      {buttonItems &&  buttonItems.map((button) => <Button key={button.id} data={button.snippet} />)}
    </div>
  )
}

export default ButtonList
