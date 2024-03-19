import img from "../../../assets/top.png"
import mem1 from "../../../assets/member1.png"
import mem2 from "../../../assets/member2.png"
import mem3 from "../../../assets/member3.png"

const Contributor = () => {
    return (
        <div className="my-30 mx-2">
            <h1 className="text-5xl mb-12 pt-12 font-extrabold text-center text-[#000080]">Check Out Our Top Contributor</h1>
            <div className="flex flex-col md:flex-row items-center justify-evenly">
                <div className="w-3/5 flex justify-start">
                    <img className="h-full w-[30rem]" src={img} alt="" />
                </div>
                <div className="pb-6 w-2/5 flex-1">
                    <div className="flex flex-col md:flex-row items-center px-6 py-3">
                        <img className="rounded-lg mr-4" src={mem2} alt="" />
                        <div>
                            <h1 className="mb-1 text-[#000080] font-semibold text-lg">Ethan Johnson</h1>
                            <p className="mb-2">Expert in Web development</p>
                            <div className="-ml-2 rating rating-sm rating-half">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" checked />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center px-6 py-3">
                        <img className="rounded-lg mr-4" src={mem1} alt="" />
                        <div>
                            <h1 className="mb-1 text-[#000080] font-semibold text-lg">Ava Williams</h1>
                            <p className="mb-2">Expert in Graphics Design</p>
                            <div className="-ml-2 rating rating-sm rating-half">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" checked />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center px-6 py-3">
                        <img className="rounded-lg mr-4" src={mem3} alt="" />
                        <div>
                            <h1 className="mb-1 text-[#000080] font-semibold text-lg">Oliver Thompson</h1>
                            <p className="mb-2">Expert in Web development</p>
                            <div className="-ml-2 rating rating-sm rating-half">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-1" checked />
                                <input type="radio" name="rating-10" className="bg-[#FFE72F] mask mask-star-2 mask-half-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contributor;