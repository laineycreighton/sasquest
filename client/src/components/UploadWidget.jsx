import { useState, useEffect } from "react";

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
    <div>
      <h3 className="font-medium">WIREFRAME</h3>
      <form className="w-full" onSubmit={handleFormSubmit}>
        {/* page */}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="block" htmlFor="cloudName">
              PAGE
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="whatever"
              id="cloudName"
              name="cloudName"
              type="text"
              value={cloudName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* notes */}
        <div className="whatever">
          <div className="whatever">
            <label className="whatever" htmlFor="inline-unsigned-preset">
              NOTES
            </label>
          </div>
          <div className="whatever">
            <input
              className="whatever"
              id="inline-unsigned-preset"
              name="unsignedPreset"
              type="text"
              value={unsignedPreset}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Upload button */}
        <div className="whatever">
          <div className="whatever"></div>
          <div className="whatever">
            <button className="whatever" type="button" onClick={uploadWidget}>
              Upload
            </button>
            {uploadedImage && (
              <div>
                <img
                  src={uploadedImage}
                  alt="uploaded using the upload widget"
                />
                <button
                  className="whatever"
                  type="button"
                  onClick={handleDeleteImage}
                >
                  Delete Image
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
