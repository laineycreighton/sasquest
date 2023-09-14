import { useState, useEffect } from "react";
import upload from '../assets/images/upload.svg';
import trash from '../assets/images/trash-2.svg';
import '../assets/css/WireframeDashboard.css';

export default function UploadWidget() {
  const [loaded, setLoaded] = useState(false);
  const [cloudName, setCloudName] = useState("");
  const [unsignedPreset, setUnsignedPreset] = useState("");
  const [uploadedImage, setUploadedImage] = useState(""); // Added state for uploaded image

  // Load uploaded image from local storage on component mount
  useEffect(() => {
    const storedUploadedImage = localStorage.getItem("uploadedImage");
    if (storedUploadedImage) {
      setUploadedImage(storedUploadedImage);
    }

    const cldScript = document.getElementById("cloudinaryUploadWidgetScript");
    if (typeof window !== "undefined" && !loaded && !cldScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "cloudinaryUploadWidgetScript");
      script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    }
  }, [loaded]);

  // Process result function
  const processResults = (error, result) => {
    if (error) {
      console.log("error: ", error);
    }
    if (result && result.event === "success") {
      console.log(result);
      const imageUrl = result.info.secure_url;

      // Save the image URL to local storage
      localStorage.setItem("uploadedImage", imageUrl);

      setUploadedImage(imageUrl);
    }
  };

  // Open widget function
  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dfecvj7s4",
        uploadPreset: "SASQUEST",
        sources: ["local", "url"],
      },
      processResults
    );
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "cloudName") {
      setCloudName(value);
    } else if (name === "unsignedPreset") {
      setUnsignedPreset(value);
    }
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // Delete the uploaded image from local storage
  const handleDeleteImage = () => {
    // Remove the image URL from local storage
    localStorage.removeItem("uploadedImage");
    setUploadedImage("");
  };

  return (
    <div className="wireframe-dashboard">
      <div className="wireframe-container">

        <div className="wireframe-header">
          <p>WIREFRAME</p>
        </div>

        {/*----- ADD WIREFRAME FORM -----*/}
        <form className="wireframe-form" onSubmit={handleFormSubmit}>

          {/* TITLE */}
          <div className="wireframe-title">
            <label htmlFor="cloudName">Title</label>
            <input id="cloudName" name="cloudName" type="text" value={cloudName} onChange={handleInputChange} />
          </div>

          {/* IMAGE */}
          <div className="wireframe-image">
            <label htmlFor="upload-image">Image</label>
            <button id="upload-image" type="button" onClick={uploadWidget}>
              <img src={upload} alt="upload" />
            </button>
          </div>

          {/* NOTES */}
          <div className="wireframe-notes">
            <label htmlFor="inline-unsigned-preset">Notes</label>
            <textarea id="inline-unsigned-preset" name="unsignedPreset" type="text" value={unsignedPreset} onChange={handleInputChange} />
          </div>

          {/* BUTTON */}
          <div className="wireframe-button">
            <button>
              Add
            </button>
          </div>
        </form>
      </div>


      {/*----- VIEW WIREFRAMES -----*/}
      <div className="view-wireframes">

        {/* EVERY IMAGE */}
        {uploadedImage && (

          <div className="each-wireframe-container">

            {/* DELETE */}
            <button className="wireframe-trash" type="button" onClick={handleDeleteImage}>
              <img src={trash} alt="delete trash can" />
            </button>

            {/* IMAGE */}
            <div className="each-wireframe-image">
              <img src={uploadedImage} alt="wireframe image" />
            </div>

          </div>

        )}
      </div>



    </div>

  );
}