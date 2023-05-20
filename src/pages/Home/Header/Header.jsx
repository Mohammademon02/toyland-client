

const Header = () => {
    return (
        <div className="hero mt-5" style={{ backgroundImage: `url("https://i.ibb.co/Bg3bFch/banner.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To ToyLand</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-secondary">Explore Toy</button>
                </div>
            </div>
        </div>
    );
};

export default Header;