import axios from "axios";
import {  useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Css/Login.css"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


function Login() {

    const router = useNavigate();

    const { state,dispatch } = useContext(AuthContext)
    console.log(state, "state from context into login componnt")

    const [userData, setUserData] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            try {
                const response = await axios.post('http://localhost:9000/api/v1/login', { 
                email:userData.email,
                password:userData.password
                })
                if (response.data.success) { 
                    dispatch({
                        type: "Login",
                        payload: response.data.user
                    })
                    localStorage.setItem("batch2Token",JSON.stringify(response.data.token))
                    setUserData({ email: "", password: "" })
                    router('/Homepage')
                    toast.success(response.data.message)
                }
            } catch (error) {
                if(!error.response.data.success)
                toast.error(error.response.data.message)
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }

    return (
    <div className="login">
        <div className="reg">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
             <div className="email">
            <input name="email" type="email" placeholder="Enter the Email" onChange={handleChange}/>
            </div>
            <div className="password">
            <input name="password" type="password" placeholder="Enter the password" onChange={handleChange}/>
            </div>
            <div className="line">
                <p>By continuing, I agree to <a><u>Terms of Use</u></a> & <a><u>Privacy Policy</u></a></p>
            </div>
            <div className="btn">
            <input type="submit" value="Login"/>
         </div>
        </form>
        </div> 
        <div className="img-data">
        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcaaa047f/login_signup/Mask-Group.png"/>
        </div>
        </div>
    )
}

export default Login;