import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import { Formik } from 'formik';
import axios from "axios";
export default function SignUpPage() {
    const isLoggingIn = useState('Login');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="text-center m-5-auto">
            <h2>Esdiac Sample</h2>
            <h5>Create your personal account</h5>
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
             
            //  loginUser(values)
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
                    <label>First Name</label><br/>
                    <input
             type="firstName"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
           /><br/>
           {errors.firstName && touched.firstName && errors.firstName}
                        </p>
                        
                        <p>
                    <label>Last Name</label><br/>
                    <input
             type="lastName"
             name="lastName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastName}
           /><br/>
           {errors.lastName && touched.lastName && errors.lastName}
                </p>
                <p>
                    <label>email address</label><br/>
                    <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           /><br/>
           {errors.email && touched.email && errors.email}
                        </p>

                       <p>
                    <label>Country</label><br/>
                    <input
             type="country"
             name="country"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.country}
           /><br/>
           {errors.country && touched.country && errors.country}
                        </p>    

                        
                <p>
                   
                <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           /><br/>
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
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
