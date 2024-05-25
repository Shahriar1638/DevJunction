/* eslint-disable no-unused-vars */
import { useState,useContext, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TbPlaylistX } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { Link,NavLink } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider";
import logo from "../../assets/Logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error);
        })
    }  
    const Options = 
    <>
        <li className="text-base text-white font-semibold"><NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#0DD3FA]" : ""}>Home</NavLink></li>
        <li className="text-base text-white font-semibold"><NavLink to={`/myjobs?email=${user?.email}`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#0DD3FA]" : ""}>My Posted Job</NavLink></li>
        <li className="text-base text-white font-semibold"><NavLink to={`/bidrequest?email=${user?.email}`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#0DD3FA]" : ""}>BID Request</NavLink></li>
        <li className="text-base text-white font-semibold"><NavLink to={`/postjob`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#0DD3FA]" : ""}>Post Job</NavLink></li>
        <li className="text-base text-white font-semibold"><NavLink to={`/bids?email=${user?.email}`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#0DD3FA]" : ""}>My Bids</NavLink></li>
    </>
    
    return (
        <nav className="flex flex-row h-24 justify-between items-center px-4 md:px-8 lg:px-16 bg-[#080705]">
            {/* When device is larger or equal to mid size device logo below will show left */}
            <div className="hidden md:block">
                <div className=" flex flex-row items-center">
                   <img className="w-full h-16" src={logo} alt="" />
                   <h1 className="text-2xl font-bold text-white">Dev<span className="text-[#0DD3FA]">Junction</span></h1> 
                </div>          
            </div>
            
            <div>
                {/* Icon for drop down navbar */}
                <div className="md:hidden" onClick={()=> setOpen(!open)}>
                    {
                        open === true ? <TbPlaylistX className="text-4xl text-[#FFE72F]"></TbPlaylistX> : <AiOutlineMenu className="text-4xl text-[#FFE72F]"></AiOutlineMenu>
                    }   
                </div> 
                <div>
                    <ul className={`md:flex md:gap-8 duration-2000 items-center absolute md:static ${open? 'top-16 text-left left-2 text-white bg-[#101326] rounded-md p-4': '-top-40 text-left left-2 '}`}>
                        {Options}
                    </ul>          
                </div>          
            </div>
            {/* When it is mid size device or below , Logo at center will be visible */}
            <div className="md:hidden">
                <div className=" flex flex-row items-center">
                   <img className="w-full h-16" src={logo} alt="" />
                   <h1 className="text-2xl font-bold text-white">Dev<span className="text-[#0DD3FA]">Junction</span></h1> 
                </div>  
            </div>
            {/* User name of navbar */}
            <div className="flex flex-row items-center">
                {
                    user ? <>
                        <div className="flex flex-row items-center">
                            {
                                user.photoURL? <div className="avatar">
                                                    <div className="w-10 mr-4 rounded-full">
                                                            <img src={user.photoURL} />
                                                    </div>
                                                </div>:
                                                <BsPersonCircle className="text-4xl text-[#0DD3FA] mr-4"></BsPersonCircle>
                                }
                                <span className="mr-4 text-xl text-white hidden md:block">{user.displayName}</span>
                            </div>                     
                            <a className="btn bg-[#FFE72F] border-none text-white" onClick={handleLogOut}>Sign Out</a>
                        </>
                        :
                        <div className="flex flex-row items-center">
                                <Link className="btn bg-[#FFE72F] border-none text-white font-semibold" to="/login">Log In</Link>
                        </div>                         
                    }
            </div>          
        </nav>
    );
};

export default Navbar;