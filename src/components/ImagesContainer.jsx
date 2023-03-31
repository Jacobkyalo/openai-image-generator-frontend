import { useContext } from "react";
import { ImageContext } from "../contexts/ImageContext";
import { LineWave } from "react-loader-spinner";

function ImagesContainer() {
  const { images, loading } = useContext(ImageContext);
  return (
    <>
      {images?.length > 1 ? (
        <section className="my-8">
          {loading ? (
            <div className="flex justify-center text-center mt-4 ">
              <span className="block">
                <LineWave
                  height="100"
                  width="100"
                  color="#2563eb"
                  ariaLabel="line-wave"
                  visible={true}
                />
              </span>
            </div>
          ) : (
            <div
              className={`${
                images?.length > 1 ? "bg-gray-800" : "bg-gray-900"
              } rounded-2xl`}
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
      ) : (
        ""
      )}
    </>
  );
}

export default ImagesContainer;
