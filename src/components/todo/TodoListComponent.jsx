import {useEffect, useState} from "react";
import {deleteTodo, getTodoListForUser} from "./api/TodoApiService";
import {useAuth} from "./security/AuthContext";
import {useNavigate} from "react-router-dom";

export default function TodoListComponent() {

  const [todos, setTodos] = useState([])
  const [message, setMessage] = useState(null)
  const authContext = useAuth()
  const navigate = useNavigate()

  useEffect(() => getTodoList(), [todos]);

  function getTodoList() {
      getTodoListForUser(authContext.username)
        .then((response) => {
          console.log(response.data)
          setTodos(response.data)
        })
        .catch((error) => console.log(error))
  }

  function deleteTodoItem(id) {
      deleteTodo(authContext.username, id)
        .then(() => {
          setMessage(`Deleted to-do item ${id} successfully`)
          getTodoList()
        })
  }

  function addTodoItem() {
    navigate('/todo/-1')
  }

  function updateTodoItem(id) {
    navigate(`/todo/${id}`)
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
            <th>Update</th>
          </tr>
          </thead>
          <tbody>
          {todos.map(
            item =>
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.isDone.toString()}</td>
                <td>{item.targetDate.toString()}</td>
                <td><button className='btn btn-warning' onClick={() => deleteTodoItem(item.id)}>Delete</button></td>
                <td><button className='btn btn-success' onClick={() => updateTodoItem(item.id)}>Update</button></td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
      <button className='btn btn-success m-5' onClick={addTodoItem}>Add new item</button>
    </div>
  )
}