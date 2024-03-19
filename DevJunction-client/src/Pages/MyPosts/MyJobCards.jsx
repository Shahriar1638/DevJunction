import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const MyJobCards = ({myjob}) => {
    const [max, setMax] = useState(0)
    const [min, setMin] = useState(0)
    const { deadline, category, priceRange, fullDescription, jobTitle } = myjob
    useEffect(()=>{
        const [minStr, maxStr] = priceRange.split(' - ');
        const min = parseFloat(minStr.substring(1));
        const max = parseFloat(maxStr.substring(1));
        if (min>max){
            setMax(min)
            setMin(max)
        }else{
            setMax(max)
            setMin(min)
        }
    },[priceRange])
    return (
        <div>
            <div style={{boxShadow:'3px 5px 8px 7px rgba(0, 0, 0, 0.3)'}} className="my-20 px-4 md:px-6 bg-gradient-to-tr from-[#000080] to-[#0DD3FA] rounded-xl p-4 relative mx-4">            
                <div className="rounded-xl px-6 mt-10">
                    <h1 className="text-2xl font-bold bg-white rounded-md py-3 text-[#010326] pl-4 mb-6">Job Title{jobTitle}</h1>
                    <div  className="mb-4 flex flex-row items-center flex-wrap gap-6">
                        <h3><span className="bg-[#FFE72F] px-4 py-2 rounded-md">Category: <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{category}</span></span></h3>
                        <h3><span className="bg-[#FFE72F] px-4 py-2 rounded-md">Deadline: <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{deadline}</span></span></h3>
                        <h3><span className="bg-[#FFE72F] px-4 py-2 rounded-md">Maxprice: <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{max}$</span></span></h3>
                        <h3><span className="bg-[#FFE72F] px-4 py-2 rounded-md">Minprice: <span className="bg-white rounded-sm py-1 px-2 text-[#010326] font-semibold">{min}</span></span></h3>
                    </div>
                    <p className="text-slate-500 font-semibold mb-6 bg-white px-6 py-4 rounded-lg">{fullDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default MyJobCards;