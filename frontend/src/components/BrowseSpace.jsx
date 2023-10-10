import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const BrowseSpace = () => {


  const [spaceList, setSpaceList] = useState([]);

  const fetchSpacesData = async () => {
    const res = await fetch('http://localhost:5000/rent/getall');
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setSpaceList(data);
  };

  useEffect(() => {
    fetchSpacesData();
  }, [])

  const searchSpace = (e) => {
    const search = e.target.value;
    setSpaceList(
      spaceList.filter((space) => {
        return space.address.toLowerCase().includes(search.toLowerCase());
      })
    );
  };



  const displaySpaces = () => {
    return spaceList.map((space) => {
      return <div className="col-md-3 mt-5" > 
          <div className="card ">
            <div className="card-body">
            <img style={{width: '230px', height: '150px'}} src={'http://localhost:5000/' + space.image} alt="" />
              <h3>{space.propertyname}</h3>
              <h5>{space.propertytype}</h5>
              <h5>{space.address}</h5>
              <Link className='btn bg-danger' to={'/rentdetails/' + space._id}>ViewDetails</Link>
            </div>
          </div>
        </div>
      
        
        
      })
  }



  return (
    <motion.div   
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "-100%" }}
    transition={{ duration: 0.3, type: "spring", stiffness: 50, damping: 10 }}            
    style={{
      backgroundImage: `url('BrowseSpaceBG.jpg')`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      paddingBottom: '20px'
}}>
        <header className="">
        <div className=" container py-5">
          <h1 className="text-center " style={{
            color: 'black', fontSize: '50px', fontWeight: 'bold', marginBottom: '20px'
          }}>Search Space For Rent</h1>
          <input
            onChange={searchSpace}
            type="text"
            className="form-control form-control-lg"
            placeholder="Search Address..."
            
          />
        </div>
      </header>
      <div className='container' >
        <div className='row '>
          {displaySpaces()}
        </div>
      </div>
    </motion.div>
  )
}


  export default BrowseSpace;