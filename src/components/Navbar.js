import React from 'react';
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"




const Navbar = (props) => {
  let isloggedin=props.isloggedin;
  let setisloggedin=props.setisloggedin;



  return (
    <div className='flex justify-evenly'>
        <Link to="/">
            <img src={logo} alt='logo' width={160} height={32} loading='lazy'></img>
        </Link>

        <nav>
          <ul className='flex gap-3'>
            <li>
              <Link to="/">Home</Link>
           </li>
           <li>
              <Link to="/">About</Link>
           </li>
           <li>
              <Link to="/">Contact</Link>
           </li>
          </ul>
        </nav>

        {/*Ligin Signup buttons*/}

        <div className='flex ml-5 mr-3 gap-5'>
          { !isloggedin &&
            <Link  to="/login">
              <button>Login</button>
            </Link>
          }

          { !isloggedin &&
            <Link  to="/signup">
              <button >Signup</button>
            </Link>
          }


          {isloggedin &&
            <Link  to="/login">
              <button onClick={()=>{
              setisloggedin(false);
              toast.success("Logged Out");
              }}>
                Logout</button>
            </Link>
          }

          {isloggedin &&
            <Link  to="/dashboard">
              <button>Dashboard</button>
            </Link>
          }
          
        </div>
    </div>
  )
}
export default Navbar
