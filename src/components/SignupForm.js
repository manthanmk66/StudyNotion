import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast  from 'react-hot-toast';


 const SignupForm = ({setisloggedin}) => {

    const [formdata,setformdata]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
       

    })

    const [showpassword,setshowpassword]=useState(false)


    function changehandler(event){
        setformdata((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))

    }



    function Submithandler(event){
        event.preventDefault();
        if(formdata.password != formdata.confirmpassword){
            toast.error("password did not match");
            return;

        }
        setisloggedin(true);
        toast.success("Account is Created")

    }
  return (

    <div>
    {/*Student-Instructor tab */}
    <div>
        <button>
            Student
        </button>
        <button>
            Instructor
        </button>

    </div>
    <form onSubmit={Submithandler}>
        {/* first name last name */}

        <div>

        <label>
            
            <p> First Name<sup>*</sup> </p>
            <input
            required 
            type='text'
            name='firstname'
            onChange={changehandler}
            placeholder='Enter first name'
            value={formdata.firstname}
             
            />
           
        </label>

        <label>
            
            <p> Last Name<sup>*</sup> </p>
            <input
            required 
            type='text'
            name='lastname'
            onChange={changehandler}
            placeholder='Enter last name'
            value={formdata.lastname}
             
            />
           
        </label>

        </div>

        {/* Email Address */}

        <label>
            
            <p> Email Address<sup>*</sup> </p>
            <input
            required 
            type='email'
            name='email'
            onChange={changehandler}
            placeholder='Enter Email Address'
            value={formdata.email}
             
            />
           
        </label>

        {/* create password and confirm password */}

        


        <label>
            
            <p> Create paswword<sup>*</sup> </p>
            <input
            required 
            type={showpassword ? ("text"): ("password")}
            name='password'
            onChange={changehandler}
            placeholder='Enter password'
            value={formdata.password}
             
            />
               <span onClick={()=>setshowpassword((prev) =>!prev)}>
                    {showpassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                </span>
           
        </label>

        <label>
            
            <p> Confirm Password<sup>*</sup> </p>
            <input
            required 
            type={showpassword ? ("text"): ("password")}
            name='confirmpassword'
            onChange={changehandler}
            placeholder='Confirm Password'
            value={formdata.confirmpassword}
             
            />

                <span onClick={()=>setshowpassword((prev) =>!prev)}>
                    {showpassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                </span>
           
        </label>
        <div/>

        <button>
            Create Account

        </button>
        
    </form>
    </div>
   
  )
}


export default SignupForm;
