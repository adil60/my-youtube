import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError();

  return (
    <div>
      <h2>No route found</h2>
      <p>
        {err.status} - {err.statusText}
      </p>
    </div>
  )
}

export default Error
