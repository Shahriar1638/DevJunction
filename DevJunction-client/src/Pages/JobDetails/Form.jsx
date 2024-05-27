/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../contextProvider/AuthProvider';
import axios from 'axios';

const Form = ({email, buyerEmail, id, jobTitle }) => {
    const [bids, setBids ] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:3000/bids?id=${id}`
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBids(res.data);
        })
    }, [url])
    const handlePlaceBid = (e) =>{
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobTitle.value;
        const price = form.price.value;
        const status = 'Pending';
        const date = form.deadline.value;
        const inputDate = new Date(date);
        const deadline = inputDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        const email = user.email;
        const newInfo = {email, price, deadline, status}
        // if the bid already is in bidders databasee
        if(bids.length > 0){
            const { sellersInfo } = bids[0]
            console.log("Sellers Info:", sellersInfo)
            const alreadyBidded = sellersInfo.find((info) => info.email === email)
            console.log("Already bidded:", alreadyBidded)
            if (alreadyBidded){
                return (
                    Swal.fire(
                        'Already bidded',
                        'You cannot bid twice',
                        'warning'
                    )
            )}
            else{
                fetch(`http://localhost:3000/bids?id=${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(newInfo) 
                })
                    .then(res => res.json())
                    .then(data =>{
                        if (data.modifiedCount) {
                            Swal.fire(
                                'Your bid placed',
                                'You successfully bidded on this job',
                                'success'
                            ).then(() => {
                                form.reset();
                                window.location.reload();
                            });
                        }})
                }
        // if the bid is not in bidders database
        } else {
            const sellersInfo = [newInfo]
            const newEntry = { sellersInfo, buyerEmail , id , jobTitle }
            axios.post('http://localhost:3000/bids', newEntry)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire(
                            'Your bid placed',
                            'You successfully bidded on this job',
                            'success'
                        ).then(() => {
                            form.reset();
                            window.location.reload();
                        });
                    }
                })
        }
        
    }

    return (
        <div className="my-28">
            <h1 className="text-5xl font-extrabold text-[#000080] mb-12">Ready to Submit Your Bid? Complete the Form Below:</h1>
            <form onSubmit={handlePlaceBid} className="my-10 gap-10 px-8 rounded-xl bg-gradient-to-tr from-[#000080] to-[#0DD3FA] py-4">
                <div className="">
                    <h1 className="mb-4 text-lg font-semibold text-white">Job Title</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="text" name="jobTitle" id="010" value={jobTitle} readOnly/>
                    <h1 className="mb-4 text-lg font-semibold text-white">Price</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="text" name="price" id="012" placeholder="Your offering price...." required/>     
                    <h1 className="mb-4 text-lg font-semibold text-white ">Deadline</h1>    
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="date" name="deadline" id="013" required/>
                    <h1 className="mb-4 text-lg font-semibold text-white">User Email</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="text" name="brandName" id="014" value={email} readOnly/>
                    <h1 className="mb-4 text-lg font-semibold text-white">Buyer Email</h1>                               
                    <input className="mb-6 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="email" name="productType" id="011" value={buyerEmail} readOnly/>                               
                </div>
                <input className="btn btn-primary md:col-span-2 mb-4 text-white w-full bg-[#FFE72F] border-none" type="submit" value="Bid on the project"/>         
            </form> 
        </div>
    );
};

export default Form;