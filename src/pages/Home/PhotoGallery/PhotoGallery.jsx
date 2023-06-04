import photoData from "./photoData";

const PhotoGallery = () => {

   

    return (
        <div>
            <section className=" container mx-auto px-2 py-6">
                <div className="mx-auto w-fit  font-bold text-xl md:text-5xl px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">
                    Gallery Section
                </div>
                <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    {photoData?.map(photo => (
                        <article data-aos="zoom-in" key={photo.id}>
                            <img className="rounded-lg" src={photo.image} alt="" />
                        </article>
                    ))}
                </section>
            </section>
        </div>
    );
};

export default PhotoGallery;