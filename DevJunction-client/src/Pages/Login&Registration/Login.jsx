/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider";
import Gicon from "../../assets/google.png"
import swal from 'sweetalert';
import axios from "axios";
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [error , setError] = useState('')
    const [success, setSuccess] = useState('')
    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        setError('')    
        setSuccess('')
        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                const user = { email }
                setSuccess('Successfully Verified')
                e.target.reset()
                navigate(location?.state ? location.state : '/')
                axios.post('https://dev-junction-server.vercel.app/jwt',user, {withCredentials: true})
                .then(res => {
                    console.log("Axios Response data : ",res.data)
                    if (res.data.success){
                        navigate(location?.state ? location?.state : '/')
                    }
                })
            })
            .catch(error => {
                console.error(error);
                setError(error.code);
            })
    }
    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            swal("Welcome!", "Successfully logged in", "success");
            navigate(location?.state? location.state : '/')
        })
        .catch(error => {
            console.error(error);
            setError(error.code);
        })
    }
    return (
        <div className="px-6 my-52 rounded-xl bg-gradient-to-tr from-[#000080] to-[#0DD3FA] py-3">
            <h1 className="text-center text-[#FFE72F] my-10 text-5xl font-bold">Login your account</h1>
            <div className="my-12">
                <form onSubmit={handleLogin} className="md:w-3/4 mx-auto">
                    <h1 className="mb-4 text-lg text-white">Your Email</h1>
                    <input className="mb-4 rounded-lg px-6 py-3 w-full border border-solid border-[#0DD3FA]" type="email" name="email" id="1" placeholder="Enter email..." required/>
                    <h1 className="mb-4 text-lg text-white">Your Password</h1>
                    <input className="mb-4 rounded-lg px-6 py-3 w-full border border-solid border-[#0DD3FA]" type="password" name="password" id="2" placeholder="Enter password..." required/>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary text-white font-semibold text-lg bg-[#FFE72F] border-none">Login</button>
                    </div>
                    {
                        error && <p className="text-red-700">{error}</p>
                    }
                    {
                        success && <p className="text-green-700">{success}</p>
                    }
                    <div className="flex mt-6 flex-col items-center text-white">
                        <p className="mb-2 text-base font-medium">Dont Have Any Account?<Link to="/registration"><span className="text-[#FFE72F] underline font-bold"> Click Here to Register!</span></Link></p>
                        {/* The "or" portion*/}
                        <div>
                            <div className="flex flex-row items-center w-full">
                                <div className="border border-solid border-white w-48">
                                </div>
                                <p className="mx-4">or</p>
                                <div className="border border-solid border-white w-48">
                                </div>
                            </div>
                        </div>
                        <div onClick={handleGoogleSignIn} className="flex flex-row gap-4 my-2 w-72 items-center px-4 py-2 rounded-l-full rounded-r-full border border-solid border-[#FFE72F]" style={{ cursor: 'pointer' }}>
                            <img className="w-10 h-10" src={Gicon} />
                            <p className="text-base font-medium">Continue with Google</p>              
                        </div>
                    </div>     
                </form>
                
            </div>
        </div>
               
    );
};

export default Login;