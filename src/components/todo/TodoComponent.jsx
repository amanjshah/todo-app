import {useParams} from "react-router-dom";
import {getTodo} from "./api/TodoApiService";
import {useEffect, useState} from "react";
import {useAuth} from "./security/AuthContext";
import {Field, Form, Formik} from "formik";

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

  return (
    <div className='container'>
      <h1>Enter to-do item details</h1>
        <Formik initialValues={{description, targetDate}}
                enableReinitialize={true}
                onSubmit={(response) => console.log(response)}
        >
          {
            () => (
              <Form>
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