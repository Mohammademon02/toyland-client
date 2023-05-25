import { useEffect, useState } from "react";

const useToys = (category) => {
    const [toys, setToys] = useState(null);

    const getData = async () => {
        const response = await fetch(
            `http://localhost:5000/allToys?catagory=${category}`
        );

        const result = await response.json();
        setToys(result);
    };

    useEffect(() => {
        getData();
    }, [category]);


    return toys;
};

export default useToys;