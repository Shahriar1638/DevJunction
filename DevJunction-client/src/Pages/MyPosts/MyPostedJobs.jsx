import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import axios from "axios";
import MyJobCards from "./MyJobCards";
import IfNoJob from "./IfNoJob";
import img from "../../assets/NNONOJOB.jpg"

const MyPostedJobs = () => {
    const [myJobs, setMyJobs ] = useState([])
    const { user } = useContext(AuthContext)
    const url = `https://dev-junction-server.vercel.app/myjobs?email=${user?.email}`
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setMyJobs(res.data);
        })
    }, [url])
    return (
        <div className="my-28">
            {
                (myJobs.length === 0)? <IfNoJob img={img}></IfNoJob> : <div> 
                    <h1 className="mx-2 text-5xl font-extrabold my-12 text-[#000080]">My Posted Jobs</h1>
                 {
                    myJobs.map(myjob => <MyJobCards key={myjob._id} myjob={myjob}></MyJobCards>
                )}</div>
            }
        </div>
    );
};

export default MyPostedJobs;