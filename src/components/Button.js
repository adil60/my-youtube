import { Link } from "react-router-dom";

const Button = ({ data }) => {

  const { title } = data;

  return (
    <div className="m-1">
      <Link 
       to={"/results?q="+ encodeURIComponent(title) }
      >
      <button className="w-max px-4 py-1 rounded bg-gray-200"
      > {title}</button>
      </Link>
    </div>
  )
}

export default Button
