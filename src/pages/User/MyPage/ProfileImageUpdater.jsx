// ProfileImageUpdater.js
import React, { useState } from "react";

const ProfileImageUpdater = ({ user, setProfileImageUrl, togglePopup }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      setUploading(true);
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        setProfileImageUrl(imageDataUrl);
        setUploading(false);
        togglePopup();
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default ProfileImageUpdater;
