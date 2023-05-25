import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const AddToy = () => {

    const { user } = useContext(AuthContext);
    console.log(user)


    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value
        const photo = form.photo.value
        const description = form.description.value
        const price = form.price.value
        const quantity = form.quantity.value
        const rating = form.rating.value
        const category = form.category.value
        const userName = form.userName.value
        const email = form.email.value
        const toy = {
            title: title,
            price: price,
            quantity: quantity,
            photoUrl: photo, email:
            email,
            rating: rating,
            description: description,
            sub_category: category,
            userName: userName
        }


        fetch('http://localhost:5000/allToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div className="max-w-lg px-4 mx-auto py-4 flex min-h justify-center items-center flex-col gap-4">
            <h2 className="font-bold text-2xl ">Add a Toy</h2>
            <form
                id="addform"
                onSubmit={handleAddToy}
                className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full"
            >
                <div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Title" />
                        </div>
                        <TextInput
                            name="title"
                            id="title"
                            type="text"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="photo" value="Photo" />
                        </div>
                        <TextInput
                            name="photo"
                            id="photo"
                            type="text"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="description" value="Description" />
                        </div>
                        <TextInput
                            name="description"
                            id="description"
                            type="text"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="price" value="Price" />
                        </div>
                        <TextInput
                            name="price"
                            id="price"
                            type="text"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="quantity" value="Quantity" />
                        </div>
                        <TextInput
                            name="quantity"
                            id="quantity"
                            type="text"
                            required={true}
                            shadow={true}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="rating" value="Rating" />
                        </div>
                        <TextInput
                            name="rating"
                            id="rating"
                            type="text"
                            required={true}
                            shadow={true}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="categories"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Category
                        </label>
                        <select
                            id="categories"
                            name="category"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        >
                            <option value="regular">Regular Car</option>
                            <option value="sports">Sports Car</option>
                            <option value="truck">Truck</option>
                        </select>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="userName" value="User Name" />
                        </div>
                        <TextInput
                            name="userName"
                            id="userName"
                            type="text"
                            disabled
                            required={true}
                            shadow={true}
                            value={user?.displayName}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="userEmail" value="User Email" />
                        </div>
                        <TextInput
                            name="email"
                            id="userEmail"
                            type="text"
                            disabled
                            required={true}
                            shadow={true}
                            value={user?.email}
                        />
                    </div>
                    <Button className="mt-9 w-full" type="submit">Add Toy</Button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;