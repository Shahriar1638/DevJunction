import { useEffect, useState } from "react";

const useFakedata = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch('https://dev-junction-server.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return data
};

export default useFakedata;