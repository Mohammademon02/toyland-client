import { Button, Label, TextInput, Textarea } from "flowbite-react";
import GoogleMapLocation from "./GoogleMapLocation";



const ContactUs = () => {




    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const message = form.message.value
        form.reset();
        console.log(firstName, lastName, email, message)
    };

    return (
        <section className="container mx-auto">
            <h1 className="mx-auto w-fit  font-bold text-xl md:text-5xl px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">Contact Us</h1>
            <div className="lg:flex md:flex gap-8">
                <div className="lg:w-7/12 md:w-7/12 w-full">
                    <form onSubmit={handleSubmit} className=" lg:w-9/12 md:w-10/12 sm:w-full mx-auto px-3 flex flex-col gap-4">

                        {/* First Name & Last Name */}
                        <div className="flex gap-5">
                            <div className="w-1/2">
                                <div >
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="firstName"
                                            value="First Name"
                                        />
                                    </div>
                                    <TextInput
                                        name="firstName"
                                        id="firstName"
                                        type="text"
                                        required={true}
                                        shadow={true}
                                    />
                                </div>
                            </div>

                            <div className="w-1/2">
                                <div >
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="lastName"
                                            value="Last Name"
                                        />
                                    </div>
                                    <TextInput
                                        name="lastName"
                                        id="lastName"
                                        type="text"
                                        required={true}
                                        shadow={true}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* email */}
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Email (privacy policy)*"
                                />
                                <TextInput
                                    name="email"
                                    id="email"
                                    type="text"
                                    required={true}
                                    shadow={true}
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div
                            className="max-full"
                            id="textarea"
                        >
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="comment"
                                    value="Message"
                                />
                            </div>
                            <Textarea
                                name="message"
                                id="comment"
                                placeholder="Leave a comment..."
                                required
                                rows={4}
                            />
                        </div>

                        {/* submit button */}
                        <Button type="submit" gradientDuoTone="greenToBlue">
                            Send Message
                        </Button>
                    </form>
                </div>
                <div className="lg:w-5/12 md:w-5/12 w-full">
                    <GoogleMapLocation></GoogleMapLocation>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;