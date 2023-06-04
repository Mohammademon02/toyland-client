import { Card } from "flowbite-react";


const Blog = () => {
    return (
        <section className="container mx-auto mt-9">
            <Card className="mt-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        What is an access token and refresh token ? How do they work and where should we store them on the client-side ?
                    </p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>
                        An access token and a refresh token are commonly used in authorization. Using an access token, you can check that the user has permissions for some resources or not, and access tokens have some expiration time. On the other hand, a refresh token is used to generate a new access token if your current one expires. You can store access tokens in local storage or HTTP-only cookies, but it is most secure to store access tokens in memory.
                    </p>
                </p>
            </Card>
            <Card className="mt-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Compare SQL and NoSQL databases ?
                    </p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>
                        <li>SQL databases are relational, and NoSQL databases are non-relational.</li>
                        <li>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                        <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </p>
                </p>
            </Card>
            <Card className="mt-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        What is express js? What is Nest JS ?
                    </p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>
                        Express.js is a minimalist web application framework for Node.js, and NestJS is a powerful, full-featured web application framework built with TypeScript. Express.js is commonly used for building simple and flexible apps, and Nest.js is used for building large, complex applications.
                    </p>
                </p>
            </Card>
            <Card className="my-5 ">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        What is MongoDB aggregate and how does it work ?
                    </p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>
                        MongoDB aggregate is a powerful tool for performing advanced data processing and analysis. You can match, find, group, and sort data using this tool, and you can also limit and skip data. MongoDB processes the documents in the collection sequentially as part of chaining. The final output of chaining is the result of the last stage.
                    </p>
                </p>
            </Card>
        </section>
    );
};

export default Blog;