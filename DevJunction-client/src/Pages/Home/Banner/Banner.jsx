import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BannerImg from "./BannerImg";
import { useEffect, useState } from "react";

const Banner = () => {
    const [banners, setData2] = useState([])
    useEffect(()=> {
        fetch('http://localhost:3000/category')
            .then(res => res.json())
            .then(data => setData2(data))
    }, [])
    return (
        <div className="my-36">  
            <h1 className="mx-2 text-5xl font-extrabold my-12 text-[#000080]">Explore Our Diverse Job Categories:</h1>      
            <Carousel showThumbs={false} showArrows={false} autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={true}>
                {
                    banners.map(banner => <BannerImg banner={banner} key={banner.category}></BannerImg>)
                }
            </Carousel>
        </div>
    );
};

export default Banner;