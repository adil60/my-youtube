import Button from "./Button"

const ButtonList = () => {

  const buttonItems = [
    "All", "Music", "Mixes", "Gaming", "Live", "News", "Study",
    "Dramedy",  "Albums",
  ]

  return (
    <div className="flex flex-row m-4">
      {buttonItems.map((button,index) => <Button key={index} name={button} />)}
    </div>
  )
}

export default ButtonList
