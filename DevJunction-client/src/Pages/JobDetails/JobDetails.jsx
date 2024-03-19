import { useLoaderData } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import Form from "./Form";
import { useContext } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";

const JobDetails = () => {
    const { user } = useContext(AuthContext)
    
    const getJobDetails = useLoaderData()
    
    // eslint-disable-next-line no-unused-vars
    const {_id, jobTitle, imgurl, deadline, priceRange, fullDescription, buyerEmail} = getJobDetails
    return (
        <div className="my-36">
            <h1 className="text-7xl font-extrabold text-[#000080] mb-12">Kindly Review the Description Before Placing Your Bid:</h1>
            <div className="my-16 p-2 mx-2 rounded-lg bg-gradient-to-tr from-[#000080] to-[#0DD3FA]">
                <div className="text-justify px-8 py-6 rounded-lg bg-[#Fcfcfc]">
                    <img className="rounded-md mb-8 mx-auto" src={imgurl} alt="" />
                    <h1 className="text-5xl font-extrabold underline mb-8 text-[#000080]">{jobTitle}</h1> 
                    <div className="flex  flex-row items-center mb-6">
                        <div className="flex flex-row mb-0 items-center mr-8">
                            <MdOutlineDateRange className="mr-2 text-[#000080]"></MdOutlineDateRange>
                            <p className="text-[#414141]">DEADLINE: {deadline}</p>                    
                        </div>
                        <div className="flex flex-row items-center">
                            <IoIosPricetags className="mr-2 text-[#000080]"></IoIosPricetags>
                            <p className="text-[#414141]">PRICE RANGE: {priceRange}</p>
                        </div>
                    </div>
                    <p className="text-lg text-white bg-[#0DD3FA] rounded-xl px-4 py-2">{fullDescription}</p>
                </div>
            </div>
            <Form email={user.email} buyerEmail={buyerEmail} jobTitle={jobTitle} deadline={deadline} id = {_id}></Form>
        </div>
    );
};

export default JobDetails;