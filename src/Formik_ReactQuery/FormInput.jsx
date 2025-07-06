import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';
const FormInput=()=>{
    const ReponseofAPi =async ()=>{
      const responsedata = await axios.get('https://jsonplaceholder.typicode.com/users');
      return responsedata.data;
    }



    const {data,isLoading,isError} = useQuery({queryKey:['users'],queryFn:ReponseofAPi})
    console.log(data)
    console.log(isLoading)
    console.log(isError)
    const formik = useFormik({
        initialValues:{
                firstname:"",
                lastname:'',
                email:""
        },
        validationSchema:Yup.object({
             firstname:Yup.string().required('firstname is rquired'),
             lastname:Yup.string().required('Lastname is rquired'),
             email:Yup.string().email('email is invalid').required('email is rquired')
        }),
          onSubmit: values => {
                console.log('Submitted:', values);
            }
    })
    return(
        <>
             <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstname">firstname</label>
                    <input type='text' name='firstname' value={formik.values.firstname} onChange={formik.handleChange}/>
                    {formik.errors.firstname && <p>{formik.errors.firstname}</p>}
                    <label htmlFor='lastname'>lastname</label>
                    <input type='text' name='lastname' value={formik.values.lastname} onChange={formik.handleChange}/>
                       {formik.errors.lastname && <p>{formik.errors.lastname}</p>}
                       <label htmlFor='email'>email</label>
                    <input type='email' name='email' value={formik.values.email} onChange={formik.handleChange}/>
                     {formik.errors.email && <p>{formik.errors.email}</p>}
                      <button type="submit">Submit</button>
             </form>
        </>
    )
}

export default FormInput;