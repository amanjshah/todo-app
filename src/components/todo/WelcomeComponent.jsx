import {Link, useParams} from "react-router-dom";

export default function WelcomeComponent() {
  return (
    <div className='Welcome'>
      <h1>Welcome {useParams().username}</h1>
      <Link to='/todos'>Manage your to-do list</Link>
    </div>
  )
}