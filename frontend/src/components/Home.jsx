import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
//import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

// https://tse1.mm.bing.net/th?id=OIP.22E1NsdkOM3ooOXQw2qx9wHaEK&pid=Api&P=0&h=220



const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: "100%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "-100%" }}
    transition={{ duration: 0.3, type: "spring", stiffness: 50, damping: 10 }}
    style={{ backgroundImage: `url(https://i.pinimg.com/236x/7f/6d/f6/7f6df61a48cc607d091ec27247091f58.jpg)`,
    backgroundSize: '100vw',
    backgroundRepeat: 'no-repeat'
    }}>
      <div className='d-flex justify-content-between' >
      <div className='align-items-center' style={{marginTop:'100px'}}>
        <h1 className='text-center' 
        style={{marginTop:'25px',
        fontWeight:'bolder',
        fontSize:'65px',
        fontStyle:'bold',
        fontFamily:'Times-BoldItalic',
        color:'black',
       
        }}>
          Welcome to Roomie Rentals: "Your Home Away from Home"</h1>
      </div>
      <div >
        <img style={{marginTop:'100px'}} src="/HomePageImg.svg" alt=""/>
      </div>
      </div>

      {/* section2 */}

     

      {/* section3 */}
      <div className=' ' style={{
        marginTop: '20px',
        height: '45vh',
        width: '100vw', 
      }}>
      <h1 style={{
        fontFamily:'Times-BoldItalic',
        fontStyle:'bold',
        fontWeight: 'bold',
        fontSize: '40px',
        textAlign: 'center',
        paddingTop: '10px',
        color: 'black'
      }}>Benefits of Renting with Us</h1>
      <div className='d-flex justify-content-around mt-3'>
      <div className='bg-dark'
      style={{width: '250px', height: '150px', borderRadius: '25px'}}
      >
        <img style={{width: '100px', height: '100px', borderRadius: '50px' }} 
        className='d-block m-auto p-2' 
        src="data:image/png;base64,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" alt="" />
        <h5 style={{}}
        className='m-auto p-2 text-center'>Zero Brokerage</h5>
        </div>
      <div className='bg-dark'
      style={{width: '250px', height: '150px', borderRadius: '25px'}}
      >
        <img style={{width: '100px', height: '100px', borderRadius: '50px'}}
        className='d-block m-auto p-2' 
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeUxOniFfQRPfwimgH46ru2ED6TXydNtcK9CuWOUM9hQB3K5jpBIUv9l-4ixe0Y9DTB8&usqp=CAU" alt="" />
        <h5 style={{}}
        className='m-auto p-2 text-center'>Affordable Rents </h5>
        </div>
      <div className='bg-dark'
      style={{width: '250px', height: '150px', borderRadius: '25px'}}
      >
        <img style={{width:'100px', height: '100px', borderRadius: '50px' }}
        className='d-block m-auto p-2' 
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJYvXTbmP79NMgnLAm60apQKIU6_qY3rR55g&usqp=CAU" alt="" />
         <h5 style={{}} 
         className='m-auto p-2 text-center'>Instant Refund </h5>
        </div>
      </div>
    </div>

    {/* footer */}
    <footer style={{ color: 'white'}} className=" bg-dark text-center text-lg-start">
  {/* Grid container */}
  <div className="container p-4">
    {/*Grid row*/}
    <div className="row">
      {/*Grid column*/}
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Are You Home Owner?</h5>
        <p>
         If you are a home owner and searching for Tenants for renting your home, then 
         this is the right platfotrm for you. Here you can list your property and get your 
         perfect tenants.
        </p>
        <Link to ='addrentproperty' style={{height: '50px', width: '150px', borderRadius: '10px',backgroundColor: 'lightgrey' }}
         className='btn text-bold'>Add Your Property</Link>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Searching For Home?</h5>
        <p>
          If you are searching for a home , then here you can get a number of options 
          to choose a perfect place for you to live. All you have to do here is click and pick.
        </p>
        <button style={{height: '50px', width: '150px', borderRadius: '10px'}}>Search For House</button>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ color: 'black', backgroundColor: 'lightgrey' }}
  >
    © 2023 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">
      Roomierentals.com
    </a>
  </div>
  {/* Copyright */}
</footer>



    

  </motion.div>
  )
}

export default Home;