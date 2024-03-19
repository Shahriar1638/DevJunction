/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../contextProvider/AuthProvider';
import axios from 'axios';

const Form = ({email, buyerEmail, id, jobTitle }) => {
    const [bids, setBids ] = useState([])
    const { user } = useContext(AuthContext)
    const url = `https://dev-junction-server.vercel.app/bids?email=${user?.email}`
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBids(res.data);
        })
    }, [url])
    const handlePlaceBid = (e) =>{
        e.preventDefault();
        const form = e.target;
        const price = `$${form.price.value}`
        const status = 'Pending'
        const date = form.deadline.value;
        const inputDate = new Date(date);
        const deadline = inputDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        const info = {price, email, buyerEmail, id, jobTitle, deadline, status}
        console.log(info)
        const alreadyBidded = bids.find((bid) => bid.id === id)
        if (alreadyBidded){
            return (
                Swal.fire(
                    'Already bidded',
                    'You cannot bid twice',
                    'warning'
                )
        )}
        else{
            fetch('https://dev-junction-server.vercel.app/bids', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(info) 
            })
                .then(res => res.json())
                .then(data =>{
                        console.log(data)
                        if (data.insertedId) {
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
        
    }

    return (
        <div className="my-28">
            <h1 className="text-5xl font-extrabold text-[#000080] mb-12">Ready to Submit Your Bid? Complete the Form Below:</h1>
            <form onSubmit={handlePlaceBid} className="my-10 gap-10 px-8 rounded-xl bg-gradient-to-tr from-[#000080] to-[#0DD3FA] py-4">
                <div className="">
                    <h1 className="mb-4 text-lg font-semibold text-white">Price</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="text" name="price" id="012" placeholder="Your offering price...." required/>     
                    <h1 className="mb-4 text-lg font-semibold text-white ">Deadline</h1>    
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="date" name="deadline" id="013" required/>
                    <h1 className="mb-4 text-lg font-semibold text-white">User Email</h1>
                    <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="text" name="brandName" id="014" value={email} readOnly/>
                    <h1 className="mb-4 text-lg font-semibold text-white">Buyer Email</h1>                               
                    <input className="mb-6 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="email" name="productType" id="011" value={buyerEmail} readOnly/>                               
                </div>
                <input className="btn btn-primary md:col-span-2 mb-4 text-white w-full bg-[#FFE72F] border-none" type="submit" value="Bid on the project" disabled={buyerEmail === email ? true : false}/>         
            </form> 
        </div>
    );
};

export default Form;