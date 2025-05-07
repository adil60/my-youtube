import { Link, useNavigate } from "react-router-dom";

const Button = ({ data }) => {

  const navigate = useNavigate();

  const { title } = data;

  return (
    <div className="m-1">
      <Link 
       to={"/results?q="+title}
      >
      <button className="w-max px-4 py-1 rounded bg-gray-200"
      > {title}</button>
      </Link>
    </div>
  )
}

export default Button
