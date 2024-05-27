import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login&Registration/Login";
import Registration from "../Pages/Login&Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainBody from "../Layout/mainBody";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import MyPostedJobs from "../Pages/MyPosts/MyPostedJobs";
import PostJob from "../Pages/Post Job/PostJob";
import MyBids from "../Pages/Mybids/MyBids";
import BidRequest from "../Pages/BidRequests/BidRequest";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainBody></MainBody>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>
                Promise.all([
                  fetch("http://localhost:3000/category"),
                  fetch("http://localhost:3000/jobs"),
                ]).then((responses) =>
                  Promise.all(responses.map((response) => response.json()))
                ),

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/myjobs',
                element: <MyPostedJobs></MyPostedJobs>,
            },
            {
                path: '/postjob',
                element: <PostJob></PostJob>,
            },
            {
                path: '/bids',
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
            },
            {
                path: '/bidrequest',
                element: <PrivateRoute><BidRequest></BidRequest></PrivateRoute>,
            },
            {
                path: '/jobs/:id',
                // element: <JobDetails></JobDetails>,
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            
        
        ]
    }
])
export default routes