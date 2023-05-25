import SingleToy from "../Home/SingleToy/SingleToy";


const Toys = ({toys}) => {
    
    return (
        <div className="grid grid-cols-3">
            {toys?.map((toy) => (
                <SingleToy key={toy?._id} toy={toy} />
            ))}
        </div>
    );
};

export default Toys;