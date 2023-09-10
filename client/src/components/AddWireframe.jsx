// BELONGS TO:
//      - Wireframe.jsx
//
//
// FUNCTIONALITY:
//      - POST ROUTE for a new wireframe:
//                      01. name
//                      02. upload image(using Cloudinary)
//                      03. notes
//
//
//
// VISUAL:
//      - renders a form for a new wireframe
//                               01. name
//                               02. upload
//                               03. notes
//                               04. new button - (window.location.reload())

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_WIREFRAME } from "../utils/mutations";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { quality } from "@cloudinary/url-gen/actions/quality";
import { scale } from "@cloudinary/url-gen/actions/resize";

// ---------------------------------------- Cloudinary ---------------------------------------- //
const cloudinary = new Cloudinary({
  cloud: {
    cloudName: cloudinaryCloudName,
    api_key: cloudinaryApiKey,
    api_secret: cloudinaryApiSecret,
  },
});

// ---------------------------------------- Add Wireframe ---------------------------------------- //
const AddWireframe = () => {
  const [wireframeData, setWireframeData] = useState({
    name: "",
    image: "",
    notes: "",
  });

  const [createWireframe, { error }] = useMutation(CREATE_WIREFRAME);

  // ---------------------------------------- Handle Input Change ---------------------------------------- //
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWireframeData({ ...wireframeData, [name]: value });
  };
  // ---------------------------------------- Image Upload ---------------------------------------- //

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const response = await cloudinary.upload(file, {
        upload_preset: "SASQUEST",
      });

      if (response) {
        // save the cloudinary url to the image property in state
        setWireframeData({ ...wireframeData, image: response.secure_url });
      } else {
        console.error("Failed to upload image to Cloudinary");
      }
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };
  // ---------------------------------------- Submit Form ---------------------------------------- //
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await createWireframe({
        variables: { ...wireframeData },
      });
      if (data) {
        // clear the form after successful submission
        setWireframeData({
          name: "",
          image: "",
          notes: "",
        });
        // reload the page to fetch updated wireframes
        window.location.reload();
      }
    } catch (error) {
      console.error("Error edding wireframe: ", error);
    }
  };

  return (
    <div className="add-wireframe">
      <h2>WIREFRAME</h2>
      <form onSubmit={handleFormSubmit}>
        {/* page */}
        <div className="form-group">
          <label htmlFor="page">PAGE</label>
          <input
            type="text"
            id="page"
            name="page"
            placeholder="Enter page name..."
            value={wireframeData.page}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* image upload */}
        <div className="form-group">
          <label htmlFor="image">UPLOAD</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
        </div>

        {/* notes */}
        <div className="form-group">
          <label htmlFor="notes">NOTES</label>
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="10"
            placeholder="Enter notes (optional)..."
            value={wireframeData.notes}
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* new button */}
        <button id="upload-widget" className="new-button">
          NEW
        </button>
      </form>
    </div>
  );
};
export default AddWireframe;
