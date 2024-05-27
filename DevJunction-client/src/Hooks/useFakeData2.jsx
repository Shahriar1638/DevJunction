import { useEffect, useState } from "react";

const useFakeData2 = () => {
    const [data2, setData2] = useState([])
    useEffect(()=> {
        fetch('http://localhost:3000/category')
            .then(res => res.json())
            .then(data => setData2(data))
    }, [])
    return data2
};

export default useFakeData2;