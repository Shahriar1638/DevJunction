import { useEffect, useState } from "react";

const useFakeData2 = () => {
    const [data2, setData2] = useState([])
    useEffect(()=> {
        fetch('https://dev-junction-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setData2(data))
    }, [])
    return data2
};

export default useFakeData2;