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

    console.log(toys)

    const handleDelete = (_id) => {

        fetch(`http://localhost:5000/myToys/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0){
                    alert('Toy deleted successfully')
                    setToys((previous) => previous.filter((toy) => toy._id !== _id))
                }
        })
    }

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
                            handleDelete={handleDelete}
                        ></MyToysRow>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyToys;