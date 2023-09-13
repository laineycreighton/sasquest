import { useState, useEffect } from "react";

export default function UploadWidget() {
  const [loaded, setLoaded] = useState(false);
  const [cloudName, setCloudName] = useState("");
  const [unsignedPreset, setUnsignedPreset] = useState("");
  const [uploadedImage, setUploadedImage] = useState(""); // Added state for uploaded image

  useEffect(() => {
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
      setUploadedImage(result.info.secure_url);
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

  return (
    <div>
      <h3 className="font-medium">WIREFRAME</h3>
      <form className="w-full">
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
              type="text"
              value={cloudName}
              onChange={(e) => setCloudName(e.target.value)}
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
              type="text"
              id="inline-unsigned-preset"
              value={unsignedPreset}
              onChange={(e) => setUnsignedPreset(e.target.value)}
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
            {/* Display the uploaded image */}
            {uploadedImage && (
              <img src={uploadedImage} alt="uploaded using the upload widget" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
