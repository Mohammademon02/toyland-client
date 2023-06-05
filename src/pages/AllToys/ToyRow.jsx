import { Table } from "flowbite-react";
import { Link } from "react-router-dom";


const ToyRow = ({ toy }) => {
    

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {toy?.userName || 'Unknown'}
            </Table.Cell>
            <Table.Cell>
                {toy?.title}
            </Table.Cell>
            <Table.Cell>
                {toy?.sub_category}
            </Table.Cell>
            <Table.Cell>
                ${toy?.price}
            </Table.Cell>
            <Table.Cell>
                {toy?.quantity}
            </Table.Cell>
            <Table.Cell>
                <Link
                    to={`/details/${toy?._id}`}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    View Details
                </Link>
            </Table.Cell>
        </Table.Row>
    );
};

export default ToyRow;