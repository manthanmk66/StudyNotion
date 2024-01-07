import React from 'react'
import Login from '../pages/Login'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frameImage from '../assets/frame.png';


 const Template = ( {title,desc1,desc2,image,formtype,setisloggedin}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>

            </p>
            {formtype ==="signup"?
            (<SignupForm setisloggedin={setisloggedin}/>):
            (<LoginForm setisloggedin={setisloggedin}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Sign up With Google</p> 
            </button>

             

        </div>
        <div>
            <img src={frameImage}
            alt='pattern'
            width={558}
            height={504}
            loading="lazy"/>

            <img src={frameImage}
            alt='students'
            width={558}
            height={504}
            loading="lazy"/>
        </div>


    </div>
  )
}
export default Template
