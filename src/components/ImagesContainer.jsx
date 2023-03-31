import { useContext } from "react";
import { ImageContext } from "../contexts/ImageContext";

function ImagesContainer() {
  const { images, loading } = useContext(ImageContext);
  return (
    <>
      <section className="my-8">
        {loading ? (
          <h2>Loading images...</h2>
        ) : (
          <div
            className={`${!images ? "bg-gray-900" : "bg-gray-800"} rounded-2xl`}
          >
            <div className="grid justify-center gap-3 items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 rounded-lg p-8">
              {images?.map((image, index) => (
                <div className="w-full overflow-hidden" key={index}>
                  <img
                    src={image.url}
                    alt="searched image"
                    className="w-full sm:w-52 h-52 rounded-2xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default ImagesContainer;
