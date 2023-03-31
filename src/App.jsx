import { useContext } from "react";
import Form from "./components/Form";
import Hero from "./components/Hero";
import ImagesContainer from "./components/ImagesContainer";
import Navigation from "./components/Navigation";
import ImageContextProvider from "./contexts/ImageContext";

function App() {
  return (
    <div className="w-[1000px] max-w-full mx-auto my-0 p-3">
      <Navigation />
      <Hero />
      <ImageContextProvider>
        <Form />
        <ImagesContainer />
      </ImageContextProvider>
    </div>
  );
}

export default App;
