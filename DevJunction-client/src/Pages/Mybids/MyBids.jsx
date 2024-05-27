// import { useLoaderData } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import axios from "axios";

const MyBids = () => {
  const [bids, setBids ] = useState([])
  const { user } = useContext(AuthContext)
  const url = `http://localhost:3000/bids?email=${user?.email}`
  useEffect(() => {
      axios.get(url, {withCredentials: true})
      .then(res => {
        setBids(res.data);
      })
  }, [url])

  return (
    <div className="my-36">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Job Title</th>
              <th>Buyer Email</th>
              <th>Your Bid</th>
              <th>Bid Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          {
            bids.map((info,idx) => <tbody key={info._id}>
                <tr>
                    <th>{idx+1}</th>
                    <th>{info.jobTitle}</th>
                    <th>{info.buyerEmail}</th>
                    <th>{info.price}</th>
                    <th>{info.deadline}</th>
                    <th>{info.status} {info.status==="In progress"? <button className="mr-4">Complete</button>:<button>Cancel</button>}</th>
                </tr>
            </tbody>)
          }
        </table>
      </div>
    </div>
  );
};

export default MyBids;
