import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import { Formik } from 'formik';
import axios from "axios";
export default function SignInPage() {
    const isLoggingIn = useState('Login');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // const baseUrl = 'http://172.20.10.2:8080/api/v1';
    const loginUser = async (values) => {
        setIsLoading(true);
        // setError(null);
        try {
            // const response = await fetch(baseUrl + '/auth/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         "Access-Control-Allow-Origin": "*",
            //         "Access-Control-Allow-Credentials": 'true',
            //         'Access-Control-Allow-Methods': '*'
            //     },
            //     body: JSON.stringify(values)
            // });
            // const json = await response.json();
            // if (json.error) {
            //     console.log(json.error);
            //     // setError(json.error);
            // } else {
            //     window.location.href = '/';
            // }
           

const options = {
  method: 'POST',
  url: 'http://172.20.10.2:8080/api/v1/auth/login',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': '*'
    },
  data: {email: 'haqq4peace@gmail.com', password: 'Samiu987$'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
        } catch (error) {
            // setError(error);

            console.log(error);

        }
        setIsLoading(false);
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Esdiac Sample</h2>
            <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
            //  alert(JSON.stringify(values, null, 2));
             
             loginUser(values)
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
                <p>
                    <label>email address</label><br/>
                    <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
                </p>
                <p>
                   
                <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
                </p>
                <p>
                            <button id="sub_btn" type="submit" disabled={isSubmitting}>
                                { isLoggingIn }
           </button>
                </p>
                </form>
       )}
     </Formik>
            <footer>
                <p>New User? <Link to="/register">Create an account</Link>.</p>
            </footer>
        </div>
    )
}
