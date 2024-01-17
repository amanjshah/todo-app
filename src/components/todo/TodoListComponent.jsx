import {useEffect, useState} from "react";
import {deleteTodo, getTodoListForUser} from "./api/TodoApiService";
import {useAuth} from "./security/AuthContext";

export default function TodoListComponent() {

  const [todos, setTodos] = useState([])
  const [message, setMessage] = useState(null)
  const authContext = useAuth()

  useEffect(() => getTodoList(), []);

  function getTodoList() {
      getTodoListForUser(authContext.username)
        .then((response) => {setTodos(response.data)})
        .catch((error) => console.log(error))
  }

  function deleteTodoItem(id) {
      deleteTodo(authContext.username, id)
        .then(() => {
          setMessage(`Delete of to-do item ${id} successful`)
          getTodoList()
        })
  }

  return (
    <div className="container">
      <h1>To-do list</h1>
      {message && <div className='alert alert-warning'>{message}</div>}
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
            <th>Target Date</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {todos.map(
            item =>
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.done.toString()}</td>
                <td>{item.targetDate.toString()}</td>
                <td><button className='btn btn-warning' onClick={() => deleteTodoItem(item.id)}>Delete</button></td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  )
}