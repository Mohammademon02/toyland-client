import { Table } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import ToyRow from "./ToyRow";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const AllToys = () => {

    const [toys, setToys] = useState();
    const searchRef = useRef();
    const [search, setSearch] = useState('');
    const [toysPerPage, setToysPerPage] = useState(20)
    const [currentPage, setCurrentPage] = useState(0);


    useEffect(() => {
        fetch(`http://localhost:5000/allToys?search=${search}&page=${currentPage}&limit=${toysPerPage}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [search, currentPage, toysPerPage])

    const handleSearch = (event) => {
        event.preventDefault();
        setSearch(searchRef.current.value)
        event.target.reset();
    }


    const { totalToys } = useLoaderData();
    console.log(totalToys)
    const totalPages = Math.ceil(totalToys / toysPerPage);

    const pageNumbers = [...Array(totalPages).keys()];


    return (
        
        <section className="container mx-auto">
            <Helmet>
                <title>Toyland | All Toys</title>
            </Helmet>
            <form onSubmit={handleSearch} className="flex items-center my-9">
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input ref={searchRef} name="search" type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Speedster Racer, Sleek Sedan, Family SUV..." required />
                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                </button>
            </form>
            <span className="divide-y"></span>

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
                            <span className="sr-only">
                                View Details
                            </span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            toys?.map((toy) => <ToyRow
                                toy={toy}
                                key={toy._id}
                            ></ToyRow>)
                        }
                    </Table.Body>
                </Table>
            </div>

            <div>
                <div className="flex gap-4 items-center justify-center py-4">
                    <div className="flex gap-3 text-center flex-wrap justify-center">
                        {pageNumbers.map((number) => (

                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                type="button" className={currentPage === number ? 'w-3 h-3 border border-blue-700 bg-blue-700 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-4 inline-flex items-center justify-center' : 'w-3 h-3 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-4 inline-flex items-center justify-center'}>
                                {number + 1}
                            </button>
                        ))}
                    </div>
                    <div>
                        <select
                            onChange={(e) => setToysPerPage(e.target.value)}
                            className="cursor-pointer rounded-md  py-1 border border-blue-700"
                        >
                            <option value="" selected disabled hidden >Select</option>
                            <option value="2">2</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AllToys;