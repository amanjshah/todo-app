export default function TodoListComponent() {
  const todos =
    [
      {id: 1, description: 'Read UDS', done: false},
      {id: 2, description: 'Learn AWS', done: false},
      {id: 3, description: 'Learn DevOps', done: false},
    ]
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
          </tr>
          </thead>
          <tbody>
          {todos.map(
            item =>
              <tr>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>{item.done.toString()}</td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  )
}