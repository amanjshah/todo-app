import {useEffect, useState} from "react";
import {getTodoListForUser} from "./api/TodoApiService";

export default function TodoListComponent() {

  const [todos, setTodos] = useState([])

  useEffect(() => getTodoList(), []);

  function getTodoList() {
      getTodoListForUser("aman")
        .then((response) => {setTodos(response.data)})
        .catch((error) => console.log(error))
  }

  return (
    <div className="container">
      <h1>To-do list</h1>
      <div>
        <table className="table">
          <thead>
          <tr>
            <td>ID</td>
            <td>Description</td>
            <td>Done</td>
            <td>Target Date</td>
          </tr>
          </thead>
          <tbody>
          {todos.map(
            item =>
              <tr>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>{item.done.toString()}</td>
                <td>{item.targetDate.toString()}</td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  )
}