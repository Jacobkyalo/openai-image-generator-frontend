import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const ImageContext = createContext();
function ImageContextProvider({ children }) {
  const [images, setImages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const getImages = async () => {
    try {
      setLoading(true);
      const response = await axios.post("https://powerful-wasp.cyclic.app", {
        prompt: prompt,
      });
      const data = await response.data;
      setImages(data.images);
      setLoading(false);
      setPrompt("");
    } catch (error) {
      console.error(error);
    }
  };
  const values = { prompt, setPrompt, loading, images, getImages };
  return (
    <ImageContext.Provider value={values}>{children}</ImageContext.Provider>
  );
}

export default ImageContextProvider;
