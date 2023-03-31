import { useContext } from "react";
import { ImageContext } from "../contexts/ImageContext";

function Form() {
  const { prompt, setPrompt, getImages } = useContext(ImageContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getImages();
  };
  return (
    <section className="my-10">
      <div className="w-[300px] mx-auto bg-green-700">
        <form
          className="w-full flex flex-col sm:flex-row justify-center items-center gap-6"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            name="prompt"
            className="border-2 border-blue-600 px-6 py-2 text-white text-[20px] rounded-[40px] bg-gray-800 outline-none"
            placeholder="Enter image to generate"
            autoComplete="off"
            minLength={4}
            required
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-blue-500 hover:from-blue-500 hover:to-green-600 transition-all duration-500 text-white text-[24px] px-6 py-2 border-0 rounded-[40px]"
          >
            Generate
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
