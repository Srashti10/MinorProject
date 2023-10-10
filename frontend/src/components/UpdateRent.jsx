import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      // values.avatar = selImg;

      console.log(values);
      setSubmitting(true);

      const res = await fetch("http://localhost:5000/user/update/"+id, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);
      setSubmitting(false);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "WellDone!",
          text: "Registered Successfully 😎",
        });
        navigate("/manageuser");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }

      // write code to submit form to server
    },
  });

  return (
    <div className="pt-5">
      <h1>Update User</h1>
      <hr />

      <div className="container">
        <h3>{id}</h3>
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Signup Form</h3>
            <hr />

            <form onSubmit={signupForm.handleSubmit}>
              <label htmlFor="">Name</label>
              <span style={{ color: "red", fontSize: "0.7em", marginLeft: 10 }}>
                {signupForm.errors.name}
              </span>
              <input
                type="text"
                className="form-control mb-3"
                name="name"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
              />

              <label htmlFor="">Email Address</label>
              <span style={{ color: "red", fontSize: "0.7em", marginLeft: 10 }}>
                {signupForm.errors.email}
              </span>
              <input
                type="email"
                className="form-control mb-3"
                name="email"
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
              />

              <label htmlFor="">Password</label>
              <span style={{ color: "red", fontSize: "0.7em", marginLeft: 10 }}>
                {signupForm.errors.password}
              </span>
              <input
                type="password"
                className="form-control mb-3"
                name="password"
                onChange={signupForm.handleChange}
                value={signupForm.values.password}
              />

              <label htmlFor="">Age</label>
              <span style={{ color: "red", fontSize: "0.7em", marginLeft: 10 }}>
                {signupForm.errors.age}
              </span>
              <input
                type="number"
                className="form-control mb-3"
                name="age"
                onChange={signupForm.handleChange}
                value={signupForm.values.age}
              />

              {/* <input type="file" onChange={uploadFile} /> */}

              <button
                disabled={signupForm.isSubmitting}
                className="btn btn-primary w-100 mt-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRent;