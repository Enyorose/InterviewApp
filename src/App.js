import "./App.css";
import { useEffect, useState } from "react";
import NavigationBar from "./pages/NavigationBar";

function App() {
  const axios = require("axios");
  const baseURL = "http://localhost:7071";
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //working concept trying to store the meta data in a new state to try to not conflict with the images
  // const [meta, setMeta] = useState([]);

  //TODO: API functions (more to be added) should be in their own file!
  const getEvents = () => {
    axios
      .get(`${baseURL}/events`)
      .then(function (response) {
        setImages(response.data.scanResults);
        // working concept: May need to create a separate function to store meta data in order to display data.
        // setMeta(response.data.scanResults.detectionsList)
        console.log(response);
      })
      .catch(function (error) {
        //TODO: this should display an error in the UI!
        console.log(error);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  // Working Concept: can get function to current array length but not able to increase array to show next photo.
  // Using this youtube as a reference, https://www.youtube.com/watch?v=l1MYfu5YWHc
  // const length = setImages.length
  // const nextImage = () => {
  //   setCurrentImageIndex(currentImageIndex === length - 1 ? 0 : currentImageIndex + 1)
  // }
  // console.log(currentImageIndex)

  return (
    //TODO: This code should be factored out into multiple files
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <NavigationBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "85%",
          height: "100%",
        }}
      >
        {/* TODO: This button does nothing!  */}
        <button type="button">Previous Image</button>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div> {images.length} total images </div>
            <div> Index: {currentImageIndex} </div>
          </div>
          {images.length > 0 && <img src={images[currentImageIndex].jpg} />}
          {images[currentImageIndex]?.createdOn && (
            <div> Scan Timestamp: {images[currentImageIndex].createdOn} </div>
          )}
          {/* TODO: Finish adding image metadata!  */}
          {/* Working Concept: trying to out put the data for MetaData but the sate is undefined see possible conclusion in fetch function  
          <div> Image Metadata: {meta.uuid}</div> */}
          <div> Image Metadata: Display photo meta data</div>
          <div> Number of Detections: INCOMPLETE </div>
        </div>
        {/* TODO: This button also does nothing  */}
        {/* working concept: Hoping to get a counter function to fire upon click. 
        <button onClick={nextImage} type="button">Next Image</button> */}
        <button type="button">Next Image</button>
      </div>
    </div>
  );
}

export default App;
