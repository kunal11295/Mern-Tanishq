import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast";
import "./Css/Register.css"

const Register = () =>
{
    const [userData,setuserData] = useState({name:"",email:"",password:"",confirmpassword:""})

    const router = useNavigate()

    console.log(userData,"userData") 

    const handleChange = (event) =>
    {
        setuserData({...userData,[event.target.name]:event.target.value})
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmpassword)
        {
                try{
                    const response = await axios.post("http://localhost:9000/api/v1/register",{
                    name:userData.name, 
                    email:userData.email,
                    password:userData.password,
                    confirmpassword:userData.confirmpassword
                    
                    })
                    if(response.data.success)
                    {
                        router('/login')
                        toast.success(response.data.message)
                    }
                }catch(error)
                {
                    if(!error.response.data.success)
                    toast.error(error.response.data.message)
                }
         }else{
            toast.error("All field are mandatory")
        }
    }
    return(
        <div>
<div className="Register">
        <div className="Reg">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <div className="name">
                <input  type="text" name="name" placeholder="Enter Name" onChange={handleChange}/>
               </div> 
               <div className="email">
                <input type="email" name="email"  placeholder="Enter email" onChange={handleChange}/>
               </div>
            <div className="password">
             <input  type="password" name="password" placeholder="Enter Password" onChange={handleChange}/>
            </div>
            <div className="confirmpassword">
                <input type="password" name="confirmpassword"  placeholder="Enter ConfirmPassword" onChange={handleChange}/>
            </div>
            <div className="line">
                <p>By continuing, I agree to <a><u>Terms of Use</u></a> & <a><u>Privacy Policy</u></a></p>
            </div>
            <div className="submit">
                <input type="submit" value="Register"/>
            </div>
    </form>
    </div>
      <div className="image">
            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcaaa047f/login_signup/Mask-Group.png"/>
        </div>
    </div>
    </div>
    )
}

export default Register;