import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

 const LoginForm = ({setisloggedin}) => {
    const navigate=useNavigate();

    const [formdata,setformdata]=useState({
        email:"", password:""
    })

    const [showpassword,setshowpassword]=useState(false);

    function changehandler(event){
        setformdata((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))

    }

    function submithandler(event){
        event.preventDefault();
        setisloggedin(true);
        toast.success("Logged in");
        navigate("/dashboard");
       
    }
  return (
    <div>
        <form onSubmit={submithandler}>
            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input 
                required  
                type="email"
                value={formdata.email}
                onChange={changehandler}
                placeholder='Enter Email id'
                name="email"

                />
            </label>

            <label>
                <p>
                    Password<sup>*</sup>
                </p>
                <input 
                required  
                type={showpassword ? ("text"): ("password")}
                value={formdata.password}
                onChange={changehandler}
                placeholder='Enter paswword '
                name='password'

                />

                <span onClick={()=>setshowpassword((prev) =>!prev)}>
                    {showpassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                </span>

                <Link to="#">
                    <p>
                        Forget Password
                    </p>
                </Link>
            </label>

            <button
            >Sign in</button>
        </form>
    </div>
  )
}
export default LoginForm
