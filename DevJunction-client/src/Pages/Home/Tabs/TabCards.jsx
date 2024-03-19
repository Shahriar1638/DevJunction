/* eslint-disable react/prop-types */
import { MdOutlineDateRange } from "react-icons/md";
import { RiAuctionFill } from "react-icons/ri";
import { IoIosPricetags } from "react-icons/io";
import noimg from "../../../assets/ifNoImage.png"
import { Link } from "react-router-dom";

const TabCards = ({job}) => {
    const {_id, jobTitle, imgurl, deadline, priceRange, shortDescription, fullDescription} = job
    return (
        <div className="w-full flex flex-col mb-8 items-center">
            <div className="w-[28rem] flex flex-col text-center items-center">
                <img className="w-96 h-64 bg-cover border border-solid border-black mb-4 rounded-md" src={imgurl? imgurl : noimg} alt="" />
                <h1 className="text-xl font-bold text-[#000080] underline mb-4">{jobTitle}</h1>
                {shortDescription ? (
                    <p className="mb-4 text-lg px-6 h-20">{shortDescription}</p>
                ) : (
                    <p className="mb-4 text-lg px-6 h-20">{fullDescription.substring(0, 100)} .....</p>
                )}
                <div className="flex flex-row items-center mb-2">
                    <MdOutlineDateRange className="mr-2 text-[#000080]"></MdOutlineDateRange>
                    <p className="text-[#414141] mr-2">DEADLINE: {deadline}</p>                    
                </div>
                <div className="flex flex-row items-center mb-4">
                    <IoIosPricetags className="mr-2 text-[#000080]"></IoIosPricetags>
                    <p className="text-[#414141]">PRICE RANGE: {priceRange}</p>
                </div>
                <Link to={`/jobs/${_id}`}><button className="w-96 rounded-r-full rounded-l-full py-2 bg-[#000080] text-white flex flex-row items-center justify-center font-semibold"><RiAuctionFill className="mr-2 text-lg"></RiAuctionFill> BID NOW</button></Link>                  
            </div>
        </div>
    );
};

export default TabCards;