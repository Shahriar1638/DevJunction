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
                  fetch("https://dev-junction-server.vercel.app/category"),
                  fetch("https://dev-junction-server.vercel.app/jobs"),
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
                element: <MyBids></MyBids>,
            },
            {
                path: '/jobs/:id',
                // element: <JobDetails></JobDetails>,
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://dev-junction-server.vercel.app/jobs/${params.id}`)
            },
            
        
        ]
    }
])
export default routes