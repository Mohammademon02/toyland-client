import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Table } from "flowbite-react";
import MyToysRow from "./MyToysRow";


const MyToys = () => {

    const [toys, setToys] = useState();

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
    }, [user?.email])


    return (
        <div className="overflow-auto">
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Seller Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Toy Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Category
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Available Quantity
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span >
                            Action
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        toys?.map(toy => <MyToysRow 
                        toy={toy}
                        key={toy._id}
                        ></MyToysRow>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyToys;