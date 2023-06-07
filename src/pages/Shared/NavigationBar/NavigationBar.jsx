import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Avatar, Button, Dropdown, Navbar, Tooltip } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";


const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <section className="container mx-auto">
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        ToyLand
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user ?
                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={
                                    <Tooltip
                                        content={user?.displayName}
                                        placement="left"
                                    >
                                        <Avatar alt="User settings" img={user?.photoURL} rounded={true}
                                            bordered={true} color="success" status="online"
                                        />
                                    </Tooltip>
                                }
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {user?.displayName}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {user?.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item>
                                    <NavLink onClick={handleLogOut}>Logout</NavLink>
                                </Dropdown.Item>
                            </Dropdown>
                            :
                            <div className="flex gap-2">
                                {user ?
                                    <Link className="hidden" to={"/login"}>
                                        <Button size={"sm"}>Login Now</Button>
                                    </Link>
                                    :
                                    <Link to={"/login"}>
                                        <Button size={"sm"}>Login Now</Button>
                                    </Link>
                                }
                                {user ?
                                    <Link className="hidden" to={"/register"}>
                                        <Button size={"sm"}>Register Now</Button>
                                    </Link>
                                    :
                                    <Link to={"/register"}>
                                        <Button size={"sm"}>Register Now</Button>
                                    </Link>
                                }
                            </div>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/allToys">All Toys</NavLink>

                    <NavLink to="/myToys">My Toys </NavLink>

                    <NavLink to="/addToy">Add Toy</NavLink>

                    <NavLink to="/blog">Blog </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};
export default NavigationBar;