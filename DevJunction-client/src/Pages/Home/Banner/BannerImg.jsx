/* eslint-disable react/prop-types */
const BannerImg = ({banner}) => {
    const { bannerText, category, bannerimg } = banner
    return (
        <div className="mx-2">
            <div style={{backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),url(${bannerimg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%', 
                        height: '70vh'}} className="flex items-center">
                <div className="px-8 w-3/5">
                    <h1 className="text-[#0DD3FA] mb-6 text-5xl font-extrabold text-justify underline">{category}</h1>
                    <p className="text-justify text-white">{bannerText}</p>
                </div>
            </div>
        </div>
    );
};

export default BannerImg;