import SingleToy from "../SingleToy/SingleToy";


const Toys = ({toys}) => {
    
    return (
        <div  className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 ">
            {toys?.map((toy) => (
                <SingleToy key={toy?._id} toy={toy} />
            ))}
        </div>
    );
};

export default Toys;