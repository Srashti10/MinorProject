import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const ManageUser = () => {

    const [userList, setuserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch( 'http://localhost:5000/rent/getall' );
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setuserList(data);
    };

    const deleteRent = async (id) => {
        const res = await fetch('http://localhost:5000/rent/delete/'+id, {method : 'DELETE'});
        console.log(res.status);
        if(res.status === 200){
            fetchUserData();
            toast.success('User Deleted Successfully ❗')
        }
    }

    useEffect(() => {
      fetchUserData();
    }, []);

    const displayUserData = () => {
        return <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Property Name</th>
                    <th>Property Type</th>
                    <th>Facilities</th>
                    <th>Rent Price</th>
                     <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map( (rent) => ( <tr>
                        <td>{rent.propertyname}</td>
                        <td>{rent.propertytype}</td>
                        <td>{rent.facilities}</td>
                        <td>{rent.rentprice}</td>
                        <td>
                            <Link to={'/updaterent/'+rent._id} className='btn btn-primary'>Edit</Link>
                        </td>
                        <td>
                            <button onClick={() => {deleteRent(rent._id)}} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>

                    ))
                }
            </tbody>
        </table>
        
    }
    

  return (
    <motion.div className='pt-5'
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "-100%" }}
    transition={{ duration: 0.3, type: "spring", stiffness: 50, damping: 10 }}
    style={{
        backgroundImage: `url('ManageSpaceBG.jpg')`,
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}>
        <h1 className='text-center fw-bold '
        style={{
            color: 'black', fontSize: '50px', fontWeight: 'bold', marginBottom: '20px'
        }}>Manage Property Data</h1>
        <hr />
        <div className='container'>
            {displayUserData()}
        </div>
    </motion.div>
  )
}

export default ManageUser;