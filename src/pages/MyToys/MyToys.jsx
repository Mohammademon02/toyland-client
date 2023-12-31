import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Table } from "flowbite-react";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyToys = () => {

    const [toys, setToys] = useState();
    const [sort, setSort] = useState();

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://toyland-server-mohammademon02.vercel.app/myToys?email=${user?.email}&sort=${sort}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user?.email, sort])

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4DC71F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toyland-server-mohammademon02.vercel.app/myToys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            setToys((previous) => previous.filter((toy) => toy._id !== _id))
                        }
                    })
            }
        })
    }

    return (
        <section>
            <Helmet>
                <title>Toyland | My Toy</title>
            </Helmet>
            <div className="flex items-center justify-end my-3">
                <p className="mr-2 font-semibold uppercase" >Sort by price : </p>
                <select
                    name="cetagory"
                    onChange={(event) => setSort(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-fit cursor-pointer"
                >
                    <option value="">select</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>

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
        </section>
    );
};

export default MyToys;