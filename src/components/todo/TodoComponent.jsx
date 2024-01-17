import {useParams} from "react-router-dom";
import {getTodo} from "./api/TodoApiService";
import {useEffect, useState} from "react";
import {useAuth} from "./security/AuthContext";

export default function TodoComponent() {
  const {id} = useParams()
  const [description, setDescription] = useState(null)
  const authContext = useAuth()

  useEffect(() => getTodoItem(), [id]);

  function getTodoItem() {
    getTodo(authContext.username, id)
      .then((response) => {
        setDescription(response.data.description)
      })
  }

  return (
    <div className='container'>
      <h1>Enter to-do item details</h1>
      <div>
        description: {description}
      </div>
    </div>
  )
}