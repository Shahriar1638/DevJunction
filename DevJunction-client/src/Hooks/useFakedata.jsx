import { useEffect, useState } from "react";

const useFakedata = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return data
};

export default useFakedata;