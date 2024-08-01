import { useFormik } from 'formik';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { motion } from "framer-motion";


  //This is a comment

const Profile = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))

   // Initializing formik
 const profileForm = useFormik({
  initialValues: currentUser,
  onSubmit : async ( values, {resetForm} ) => {
    console.log(values);

    const res = await fetch('http://localhost:5000/user/update/'+currentUser._id, {
      method: 'PUT',
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
        text : 'Profile Updated 😎'
      });

      const data = await res.json();
      console.log(data);
      sessionStorage.setItem('user', JSON.stringify(data) );
      // setLoggedIn(true);
      resetForm();

    }else{
      Swal.fire({
        icon : 'error',
        title : 'Error',
        text : 'Something went wrong'
      })
    }
    }

    })

    // write code to submit form to server
  return (
    <motion.div
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "-100%" }}
    transition={{ duration: 0.3, type: "spring", stiffness: 50, damping: 10 }}
    style={{
    paddingTop: '50px',  
    paddingBottom: '50px',
    backgroundImage: `url(Profileebg.jpg)`,
    backgroundSize: '100vw',
    backgroundRepeat: 'no-repeat'

     

    }}>
    <div className="container">
  <div className="row">
    <div className="col-12">
      {/* Page title */}
      <div className="my-5">
        <h1>My Profile</h1>
        <hr />
      </div>
      {/* Form START */}
      <form className="file-upload" onSubmit={profileForm.handleSubmit}>
        <div className="row mb-5 gx-5">
          {/* Contact detail */}
          <div className="col-xxl-8 mb-5 mb-xxl-0">
            <div className="bg-secondary-soft px-4 py-5 rounded">
              <div className="row g-3">
                <h4 className="mb-4 mt-0"> Personal detail</h4>
                {/*  Name */}
                <div className="col-md-6">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    className="form-control"              
                    placeholder=""
                    aria-label="name"
                    id='name'
                    onChange={profileForm.handleChange}
                    value={profileForm.values.name}
                  />
                </div>
               
                {/* Age */}
                <div className="col-md-6">
                  <label className="form-label">Age *</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder=""
                    aria-label="age"
                    id='age'
                    onChange={profileForm.handleChange}
                    value={profileForm.values.age}
                  />
                </div>
                
                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    className="form-control"
                    id="email"
                    aria-label="Email"
                    onChange={profileForm.handleChange}
                    value={profileForm.values.email}
                  />
                </div>
              </div>{" "}
              {/* Row END */}
            </div>
          </div>
          {/* Upload profile */}
          <div className="col-xxl-4">
            <div className="bg-secondary-soft px-4 py-5 rounded">
              <div className="row g-3">
                <h4 className="mb-4 mt-0">Upload your profile photo</h4>
                <div className="text-center">
                  {/* Image upload */}
                  <div className="square position-relative display-2 mb-3">
                  <img className='rounded-circle mb-2' src={"http://localhost:5000/"+currentUser.image} alt="" height={60} width={60}/>

                    <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary" />
                  </div>
                  {/* Button */}
                  <input type="file" id="customFile" name="file" hidden=""    />
                  <label
                    className="btn btn-success-soft btn-block"
                    htmlFor="customFile"
                  >
                    Upload
                  </label>
                  <button type="button" className="btn btn-danger-soft">
                    Remove
                  </button>
              
                  {/* Content */}
                  <p className="text-muted mt-3 ">
                    <span className="me-1">Note:</span>Minimum size 300px x
                    300px
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Row END */}
        {/* button */}
        <div className="mt-2 d-md-flex justify-content-md-center text-center">
          
          <button 
          disabled={profileForm.isSubmitting}
          type="submit" className="btn btn-primary btn-lg">
            Update profile
          </button>
        </div>
      </form>{" "}
      {/* Form END */}
    </div>
  </div>
</div>

    </motion.div>
  )
}

export default Profile;