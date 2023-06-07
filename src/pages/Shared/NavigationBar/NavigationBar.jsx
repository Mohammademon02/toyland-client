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

    const navLinkStyle = ({ isActive }) => {
        return {
            background: isActive ? 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)' : "",
            color: isActive ? 'white' : "",
        }
    }

    return (
        <section className="container mx-auto">
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Link>
                    <img
                        src="https://i.ibb.co/Yc9p53s/Asset-1xhdpi.png"
                        className="mr-3 h-6 sm:h-9"
                    />
                </Link>
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
                                    <NavLink className="hidden" to={"/login"}>
                                        <Button size={"sm"}>Login Now</Button>
                                    </NavLink>
                                    :
                                    <NavLink to={"/login"}>
                                        <Button size={"sm"}>Login Now</Button>
                                    </NavLink>
                                }
                                {user ?
                                    <NavLink className="hidden" to={"/register"}>
                                        <Button size={"sm"}>Register Now</Button>
                                    </NavLink>
                                    :
                                    <NavLink to={"/register"}>
                                        <Button size={"sm"}>Register Now</Button>
                                    </NavLink>
                                }
                            </div>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink className="px-3 py-2 rounded" style={navLinkStyle} to="/">Home</NavLink>
                    <NavLink className="px-3 py-2 rounded" style={navLinkStyle} to="/allToys">All Toys</NavLink>
                    <NavLink className="px-3 py-2 rounded" style={navLinkStyle} to="/myToys">My Toys </NavLink>
                    <NavLink className="px-3 py-2 rounded" style={navLinkStyle} to="/addToy">Add Toy</NavLink>
                    <NavLink className="px-3 py-2 rounded" style={navLinkStyle} to="/blog">Blog </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};
export default NavigationBar;