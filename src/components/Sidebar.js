import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Sidebar = () => {

  const { isMenuOpen } = useSelector((store) => store.menu)

  if (!isMenuOpen) return null;

  return (
    <div className="w-28 h-96 mr-4 p-2">
      <Link to="/" className="py-2">Home</Link>
      <p className="py-2">Subscriptions</p>
      <h1 className="font-bold pt-5 text-xl" >You</h1>
      <p className="py-2">History</p>
      <p className="py-2">Playlists</p>
      <p className="py-2">Watch Later</p>
    </div>
  )
}

export default Sidebar
