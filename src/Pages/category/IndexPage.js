import React from 'react'
import axios from "axios";
import { Table, Image, Badge, Spinner, Button } from "react-bootstrap"
import {BsFillPencilFill,BsFillTrashFill } from "react-icons/bs"
import { useHistory } from 'react-router-dom'

const Indexpage = () => {

    const history = useHistory()

    const [category, setCategory] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const getData = async () => {

        try{
            setLoading(true)// start spin right here
            const resp = await axios.get('https://api.codingthailand.com/api/category')
            //console.log(resp.data)
            setCategory(resp.data)

        } catch(error){
            //console.log(error.response)
            setError(error)
        } 
        finally {
            setLoading(false)// stop right here whatever it is(try or catch)
         }
    }

    React.useEffect(() => {

        getData()

    },[])

    if(loading === true){
        return(
            <div className="text-center mt-5"><Spinner animation="border" variant="dark" /></div>
        )
    }

    if(error){
        return(
            <div className="text-center mt-5 text-danger">
                <h4>Error from API, please try again</h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }


    return (
        <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
        <Button variant='success' className="mb-3" onClick={() => {history.push('/category/create')}}>
            + Add New Category
        </Button>
          <h2>Category</h2>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {
                  category.map((c, index) => {
                      return(
                          <tr key={c.id}>
                              <td>{c.id}</td>
                              <td>{c.name}</td>
                              <td>
                                  <Button onClick={() => history.push('/category/edit/' + c.id)}>Edit<BsFillPencilFill/></Button>
                                  <Button variant="danger" className="ml-3" onClick={
                                     async () => {
                                          const isConfirm = window.confirm('Confirm to delete >> ' + c.name + '?')
                                          if (isConfirm === true){
                                              try{
                                                const apiURL = 'https://api.codingthailand.com/api/category/'
                                                const resp = await axios.delete(apiURL+c.id)
                                                alert(resp.data.message)
                                                history.go(0) //refresh page
                                              }
                                              catch(error){
                                                  setError(error)
                                              }
                                              if(error){
                                                return(
                                                    <div className="text-center mt-5 text-danger">
                                                        <h4>Error from API, please try again</h4>
                                                        <p>{error.response.data.message}</p>
                                                    </div>
                                                )
                                            }
                                          }
                                      }
                                  }>Delete <BsFillTrashFill/></Button>
                              </td>
                          </tr>
                      )
                  })
              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    )
}

export default Indexpage
