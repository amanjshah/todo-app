import {useParams} from "react-router-dom";
import {getTodo} from "./api/TodoApiService";
import {useEffect, useState} from "react";
import {useAuth} from "./security/AuthContext";
import {ErrorMessage, Field, Form, Formik} from "formik";

export default function TodoComponent() {
  const {id} = useParams()
  const [description, setDescription] = useState('')
  const [targetDate, setTargetDate] = useState('')
  const authContext = useAuth()

  useEffect(() => getTodoItem(), [id]);

  function getTodoItem() {
    getTodo(authContext.username, id)
      .then((response) => {
        setDescription(response.data.description)
        setTargetDate(response.data.targetDate)
      })
  }

  function validate(userInput) {
    let errors = {}
    if (userInput.description.length < 5)
      errors.description = 'Enter at least 5 characters'
    if (userInput.targetDate === '')
      errors.targetDate = 'Enter a target date'
    return errors
  }

  return (
    <div className='container'>
      <h1>Enter to-do item details</h1>
        <Formik initialValues={{description, targetDate}}
                enableReinitialize={true}
                onSubmit={(userInput) => console.log(userInput)}
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
                <button className='btn btn-success m-5' type="submit">Save</button>
              </Form>
            )
          }
        </Formik>
    </div>
  )
}