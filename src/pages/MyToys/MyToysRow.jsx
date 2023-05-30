import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";


const MyToysRow = ({toy, handleDelete}) => {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
                {toy?.price}
            </Table.Cell>
            <Table.Cell>
                {toy?.quantity}
            </Table.Cell>
            <Table.Cell className="flex gap-4">
                <span>
                    <Link
                        to={`/myToys/${toy?._id}`}
                        className="font-medium"
                    >
                        <Button gradientMonochrome="lime">
                            Update
                        </Button>
                    </Link>
                </span>
                <span>
                    <Link
                        onClick={()=> handleDelete(toy?._id)}
                        className="font-medium"
                    >
                        <Button gradientMonochrome="failure">
                            Delete
                        </Button>
                    </Link>
                </span>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyToysRow;