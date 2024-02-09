import {useNavigate, useParams} from "react-router-dom";
import {addTodo, getTodo, updateTodo} from "./api/TodoApiService";
import {useEffect, useState} from "react";
import {useAuth} from "./security/AuthContext";
import {ErrorMessage, Field, Form, Formik} from "formik";
import moment from "moment";

export default function TodoComponent() {
  const {id} = useParams()
  const [description, setDescription] = useState('')
  const [targetDate, setTargetDate] = useState('')
  const username = useAuth().username
  const navigate = useNavigate()

  useEffect(() => getTodoItem(), [id]);

  function getTodoItem() {
    if (id != -1) {
      getTodo(username, id)
        .then((response) => {
          setDescription(response.data.description)
          setTargetDate(response.data.targetDate)
        })
    }
  }

  function validate(userInput) {
    let errors = {}
    if (userInput.description.length < 5)
      errors.description = 'Enter at least 5 characters'
    if (userInput.targetDate === '' || !moment(userInput.targetDate).isValid())
      errors.targetDate = 'Enter a target date'
    return errors
  }

  function submitTodo(userInput) {
    const todo = {
      id: id,
      username: username,
      description: userInput.description,
      targetDate: userInput.targetDate,
      isDone: userInput.isDone
    }
    if (id == -1) {
      addTodo(username, todo).catch(error => console.log(error))
    }
    else {
      if (todo.isDone) {
        console.log("done")
      }
      updateTodo(username, id, todo).catch(error => console.log(error))
    }
    navigate('/todos')
  }

  return (
    <div className='container'>
      <h1>Enter to-do item details</h1>
        <Formik initialValues={{description, targetDate}}
                enableReinitialize={true}
                onSubmit={submitTodo}
                validate={validate}
                validateOnChange={false}
                validateOnBlur={false}
        >
          {
            () => (
              <Form>
                <ErrorMessage name='description'
                              component='div'
                              className='alert alert-warning'
                />
                <ErrorMessage name='targetDate'
                              component='div'
                              className='alert alert-warning'
                />
                <fieldset className='form-group'>
                  <label>Description</label>
                  <Field type='text' className='form-control' name='description'/>
                </fieldset>
                <fieldset className='form-group'>
                  <label>Target Date</label>
                  <Field type='date' className='form-control' name='targetDate'/>
                </fieldset>
                <fieldset className='form-group'>
                  <label>Completed? </label>
                  <Field type='checkbox' className='form-control' name='isDone'/>
                </fieldset>
                <button className='btn btn-success m-5' type="submit">Save</button>
              </Form>
            )
          }
        </Formik>
    </div>
  )
}