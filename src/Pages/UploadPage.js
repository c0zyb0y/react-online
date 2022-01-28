import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Button } from 'bootstrap'
import { useToasts } from 'react-toast-notifications'



const SUPPORT_IMAGE_FORMAT = ['image/jpg','image/jpeg']


const UploadPage = () => {

    const history = useHistory()
    const { register, handleSubmit, errors} = useForm()

    const { addToast} = useToasts()

    const onSubmit = (data) => {
        //console.log(data)
        let fileUpload = data.picture[0]
        const reader = new FileReader()//JS function
        reader.readAsDataURL(fileUpload)
        reader.onload = async (e) => {
            let base64Image = e.target.result// result of read picture file to base64
            //console.log(base64Image)
            const apiURL = "https://api.codingthailand.com/api/upload"
            const resp = await axios.post(apiURL,{
                picture: base64Image
            })

            // alert(resp.data.data.message)
            addToast(resp.data.data.message, {appearance: 'success', autoDismiss: true})
            history.replace("/")

        }

    }







    return (
        <div className="container">
        <div className="row mt-4">
          <div className="col-md-12 ">
            <h2>Upload Image</h2>
            <form onSubmit={ handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Example file input</label>
                <input 
                type="file" 
                name="picture"
                ref={register({
                    required: 'Please select file',
                    validate:{
                        checkFileType: (value) => {
                            return value && SUPPORT_IMAGE_FORMAT.includes(value[0].type)
                        }
                    }
                })}
                className={`form-control-file ${errors.picture ? 'is-invalid' : ''}`}
                id="exampleFormControlFile1" />
                {
                    errors.picture && errors.picture.type === 'required' && (
                       <div className="invalid-feedback">{errors.picture.message}</div>
                    )
                }

                {
                    errors.picture && errors.picture.type === 'checkFileType' && (
                       <div className="invalid-feedback">Please select new file(Support only .jpg / .jpeg)</div>
                    )
                }       
            </div>
            <button type='submit' className='btn btn-primary mb-2'>Upload</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default UploadPage
