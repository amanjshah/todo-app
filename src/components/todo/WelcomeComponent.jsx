import {Link, useParams} from "react-router-dom"
import {useState} from "react";
import {dataFromDummyEndpoint} from "./api/DummyApiService";

export default function WelcomeComponent() {
  const [message, setMessage] = useState(null)

  function callApi() {
    console.log("called")
    dataFromDummyEndpoint("aman")
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("clean up"))
  }

  function successfulResponse(response) {
    console.log(response)
    setMessage(response.data.message)
  }

  function errorResponse(error) {
    console.log(error)
  }

  return (
    <div className='Welcome'>
      <h1>Welcome {useParams().username}</h1>
      <Link to='/todos'>Manage your to-do list</Link>
      <div>
        <button className='btn btn-success m-5' onClick={callApi}>Call hello world api</button>
      </div>
      <div className='text-info'>
        {message}
      </div>
    </div>
  )
}