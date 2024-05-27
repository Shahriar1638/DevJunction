import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import axios from "axios";
import img from "../../assets/2469986.jpg"
import BidRequestTable from "./BidRequestTable";
import IfNoJob from "../MyPosts/IfNoJob";
const BidRequest = () => {
    const [bidRequests, setBidRequests ] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:3000/bidrequest?email=${user?.email}`
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBidRequests(res.data);
        })
    }, [url])
    return (
        <div className="my-28">
            {
                (bidRequests.length === 0)? <IfNoJob img={img}></IfNoJob> : <BidRequestTable allBidRequests={bidRequests}></BidRequestTable>

            }
        </div>
    );
};

export default BidRequest;