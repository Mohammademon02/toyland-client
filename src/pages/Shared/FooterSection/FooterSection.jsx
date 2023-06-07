import { Footer } from "flowbite-react";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub, BsDribbble, BsLinkedin } from 'react-icons/bs';



const FooterSection = () => {
    return (
        <section className="container mx-auto mt-12">
            <Footer container={true} bgDark={true}>
                <div className=" w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href=""
                                src="https://i.ibb.co/Yc9p53s/Asset-1xhdpi.png"
                                alt="Toyland Logo"
                                name="Toyland"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Toyland
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Toy Marketplace
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Github
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Discord
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="Toyland™"
                            year={2023}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                className="text-[#0165E1]"
                                href="#"
                                icon={BsFacebook}
                            />
                            <Footer.Icon
                                className="text-[#E4405F]"
                                href="#"
                                icon={BsInstagram}
                            />
                            <Footer.Icon
                                className="text-[#1D9BF0]"
                                href="#"
                                icon={BsTwitter}
                            />
                            <Footer.Icon
                                className="text-[#000000]"
                                href="#"
                                icon={BsGithub}
                            />
                            <Footer.Icon
                                className="text-[#0072b1]"
                                href="#"
                                icon={BsLinkedin}
                            />
                            <Footer.Icon
                                className="text-[#ea4c89]"
                                href="#"
                                icon={BsDribbble}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </section>
    );
};

export default FooterSection;