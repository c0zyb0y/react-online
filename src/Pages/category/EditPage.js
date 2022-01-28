import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const schema = yup.object({
    name: yup.string().required("Category news can't be null"),
  }).required();

const EditPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, setValue
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [error, setError] = React.useState(null);

  const history = useHistory();

  const { id } = useParams();

  
  const onSubmit = async (data) => {
    console.log(data)
    try{
        const apiURL = 'https://api.codingthailand.com/api/category'
    const resp = await axios.put(apiURL,
            {
                id: id,
                name: data.name
            } 
        )
    alert("อัพเดทข้อมูลสำเร็จ")
    history.replace('/category')
    }
    catch(error){
        setError(error)
    }
  }

  React.useEffect(() => {
    getData(id);
  },[id])

const getData = async (id) => {
  const resp = await axios.get(
    'https://api.codingthailand.com/api/category/' + id
  );
  //console.log(resp.data);
  setValue('name',resp.data.name)
};


  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, please try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Edit Category</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="name">
              <Form.Label>Category News</Form.Label>
              <Form.Control
                type="text"
                name="name"
                ref={register}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <Form.Control.Feedback type="invalid">
                  {errors.name.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
