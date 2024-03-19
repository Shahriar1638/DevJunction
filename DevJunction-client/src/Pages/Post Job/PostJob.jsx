import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import Swal from 'sweetalert2'

const PostJob = () => {
    const {user} = useContext(AuthContext)
    const [email, setEmail] = useState(null);
    useEffect(() => {
        if (user) {
          setEmail(user.email);
        }
      }, [user]);
    const handleJobPost = e =>{
        e.preventDefault();
        console.log("clicked")
        const form = e.target;
        const buyerEmail = email
        const maxp = form.maxprice.value
        const bidderEmail = ''
        const jobTitle = form.jobtitle.value
        const minp = form.minprice.value
        const priceRange = `$${maxp} - $${minp}`
        const category = form.category.value;
        const date = form.deadline.value
        const fullDescription = form.description.value
        const inputDate = new Date(date);
        const deadline = inputDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        
        const job = { deadline,category, priceRange, fullDescription,jobTitle,buyerEmail,bidderEmail }
        console.log(job)
        fetch('https://dev-junction-server.vercel.app/jobs', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(job) 
            })
                .then(res => res.json())
                .then(data =>{
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire(
                                'Product Added',
                                'You success fully added a product',
                                'success'
                              )
                            form.reset();
                        }})
    }
    return (
        <div className="my-36 mx-2">
            <h1 className="text-5xl font-extrabold text-[#000080] mb-12">Kindly complete the form to submit a job posting:</h1>
            <form onSubmit={handleJobPost} className="my-10 gap-10 px-8 rounded-xl bg-gradient-to-tr from-[#000080] to-[#0DD3FA] py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mb-4">
                    <div>
                        <h1 className="mb-4 text-lg font-semibold text-white">User Email</h1>
                        <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="text" name="brandName" id="019" placeholder="Brand Name...." value={email} readOnly/> 
                        <h1 className="mb-4 text-lg font-semibold text-white">Job title</h1>
                        <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="text" name="jobtitle" id="012" placeholder="Job title...."/>     
                        <h1 className="mb-4 text-lg font-semibold text-white ">Deadline</h1>    
                        <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="date" name="deadline" id="011" placeholder="Set deadline...." required/>
                        <h1 className="mb-4 text-lg font-semibold text-white ">Maxmum Price</h1>    
                        <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="text" name="maxprice" id="013" placeholder="Maximum price...." required/>
                        <h1 className="mb-4 text-lg font-semibold text-white ">Minimum Price</h1>    
                        <input className="mb-4 rounded-lg border-2 border-solid border-[#0DD3FA] px-6 py-3 w-full" type="text" name="minprice" id="014" placeholder="Minimum price...." required/>
                    </div>  
                    <div>
                        <label htmlFor="category" className="text-lg font-semibold text-white">
                            Category
                        </label>
                        <div className="my-4">
                            <select name="category" id="category" className="select border-2 border-solid border-[#0DD3FA] w-full ">
                                <option disabled selected>Select a Category.....</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Graphics Design">Graphics Design</option>
                            </select>
                        </div>
                        <h1 className="mb-4 text-lg font-semibold text-white ">Job Description</h1>
                        <textarea className="w-full border-2 border-solid border-[#0DD3FA] rounded-lg px-4 py-2" name="description" id="" cols="70" rows="10" placeholder="Describe the job in detail......."></textarea>
                    </div>                                                                 
                </div>            
                <input className="btn btn-primary md:col-span-2 mb-4 text-white w-full bg-[#FFE72F] border-none" type="submit" value="Post Job"/>         
            </form> 
        </div>
    );
};

export default PostJob;




/**
 *  Email of the employer(read-only)
● Job title
● Deadline
● Description
● Category-these are the names of tab options of the homepage(implement a
dropdown for selecting category)
● Minimum price
● Maximum price
 */