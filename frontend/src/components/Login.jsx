import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import {motion} from 'framer-motion';
import useUserContext from "./UserContext";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required')
});

const Login = () => {

  const {setLoggedIn} = useUserContext();

  // Initializing formik
  const loginForm = useFormik({
    initialValues: {
      email : "",
      password : ""
    },
    onSubmit : async ( values, {resetForm} ) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Nice!',
          text : 'Logged in Successfully 😎'
        });

        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data) );
        setLoggedIn(true);
        resetForm();

      }else if(res.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'Email or Password is incorrect 😢'
        })
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'Something went wrong'
        })
      }

      // write code to submit form to server
    },

    validationSchema : LoginSchema
  });

  return (
    <motion.div 
    className="bg"
      initial={{opacity: 0, x: '100%' }}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: '-100%'}}
      transition={{duration: 0.3, type: 'spring', stiffness: 50, damping: 10}}
    >
   <section className="vh-100" style={{ backgroundColor: "#9A616D", marginTop:'25px' }}>
  <div className="container py-5 h-100 m-auto">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="img-fluid"
                style={{ borderRadius: "1rem 0 0 1rem" }}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                
                  <div className="d-flex align-items-center mb-3 pb-1">

                    <span className="h1 fw-bold mb-0">RoomieRentals</span>
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Login to your account
                  </h5>
                  <form onSubmit={loginForm.handleSubmit}>
            
                  <label className="form-label" htmlFor="form2Example17">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form2Example17"
                      className="form-control form-control-lg"
                      name="email"
                      onChange={loginForm.handleChange} 
                      value={loginForm.values.email}
                    />
                

                    <label className="form-label" htmlFor="form2Example27">
                      Password
                    </label>
                    
                    <input
                      type="password"
                      id="form2Example27"
                      className="form-control form-control-lg"
                      name="password"
                      onChange={loginForm.handleChange}
                      value={loginForm.values.password}
                    />
                  
                  <div className="pt-1 mb-4">
                    <button
                       disabled={loginForm.isSubmitting}
                      className="btn btn-dark btn-lg btn-block"
                    

                    >
                      Login
                    </button>
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </motion.div>
  );
};

export default Login;