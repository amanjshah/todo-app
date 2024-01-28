import {Link, useParams} from "react-router-dom"

export default function WelcomeComponent() {

  function capitalize(username) {
    return username.charAt(0).toUpperCase() + username.slice(1);
  }

  const username = useParams().username

  return (
    <div className='Welcome'>
      <h1>Welcome {capitalize(username)}</h1>
      <button className='btn btn-dark m-5'>
        <Link to='/todos'>Manage your to-do list</Link>
      </button>
    </div>
  )
}