import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider";
import swal from 'sweetalert';
import Gicon from "../../assets/google.png"
const Registration = () => {
    const {createUser,signInWithGoogle} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const password = form.get('password')
        const name = form.get('name')
        const email = form.get('email')
        // eslint-disable-next-line no-unused-vars
        const photo = form.get('photoURL')
        //Create user in firebase
        if (password.length<6){
            swal("Ooops...!", "Password has to be 6 character long", "error");
            return
        }
        else if (!/[A-Z]/.test(password)) {
            swal("Ooops...!", "Password must contain at least one capital letter.", "error");
            return 
        }
        // eslint-disable-next-line no-useless-escape
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            swal("Ooops...!", "Password must contain at least one special character", "error");
            return 
        }else{
            createUser(email, password)
            .then(result => {
                console.log(result.user)             
                updateProfile(result.user, {
                    displayName:name,
                    photoURL: photo
                })
                swal("SuccessFully Registered", "Your registration is done. Logging In.", "success");
            })
            .catch(error => {
                console.error(error);
                swal("Ooops...!", "Account already exist", "error");
            })
        }
    }
    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            swal("Welcome!", "Successfully logged in", "success");
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="max-w-7xl mx-auto my-40 px-6 rounded-xl bg-gradient-to-tr from-[#000080] to-[#0DD3FA] py-3">
            <div className="p-10 my-6">           
                <form onSubmit={handleRegister}>
                    <h2 className="text-5xl mb-10 text-left font-semibold text-[#FFE72F]">Register your account</h2>
                    <h1 className="mb-4 text-lg text-white">Your Name</h1>
                    <input className="mb-4 rounded-lg px-6 py-3 w-full border border-solid border-[#0DD3FA]" type="name" name="name" id="011" placeholder="Enter name...." required/>
                    <h1 className="mb-4 text-lg text-white">Your Photo URL</h1>
                    <input className="mb-4 rounded-lg px-6 py-3 w-full border border-solid border-[#0DD3FA]" type="name" name="photoURL" id="012" placeholder="Enter photo url...."/>
                    <h1 className="mb-4 text-lg text-white">Your Email</h1>
                    <input className="mb-4 rounded-lg px-6 py-3 w-full border border-solid border-[#0DD3FA]" type="email" name="email" id="1" placeholder="Enter email..." required/>
                    <h1 className="mb-4 text-lg text-white">Your Password</h1>
                    <input className="mb-8 rounded-lg px-6 py-3 w-full border border-solid border-[#0DD3FA]" type="password" name="password" id="2" placeholder="Enter password..." required/>
                    <input className="btn btn-primary text-white text-lg mb-4 w-full bg-[#FFE72F] border-none" type="submit" name="" id="3" value="REGISTER"/>
                </form>             
                <p className="my-4 text-base font-medium text-white">Already Have an Account?<Link to="/login"><span className="text-[#FFE72F] underline text-lg font-bold"> Login Now</span></Link></p> 
                {/* The "or" portion*/}
                <div className="flex flex-row items-center w-full text-white">
                    <div className="border border-solid border-white w-36">
                    </div>
                    <p className="mx-4">or</p>
                    <div className="border border-solid border-white w-36">
                    </div>
                </div>
                <div onClick={handleGoogleSignIn} className="flex flex-row gap-4 my-4 w-72 items-center px-4 py-2 rounded-l-full rounded-r-full border border-solid border-[#FFE72F]" style={{ cursor: 'pointer' }}>
                    <img className="w-10 h-10" src={Gicon} />
                    <p className="text-base font-medium text-white">Continue with Google</p>              
                </div>     
            </div>         
        </div>
    );
};

export default Registration;