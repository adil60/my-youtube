import { useSelector } from "react-redux"

const Sidebar = () => {

  const { isMenuOpen } = useSelector((store) => store.menu)

  if (!isMenuOpen) return null;

  return (
    <div className="w-48 shadow-2xl h-full mr-4 p-2">
      <p className="py-1">Home</p>
      <p className="py-1">Shorts</p>
      <p className="py-1">Subscriptions</p>
      <h1 className="font-bold pt-5 text-xl" >You</h1>
      <p className="py-1">History</p>
      <p className="py-1">Playlists</p>
      <p className="py-1">Watch Later</p>
    </div>
  )
}

export default Sidebar
