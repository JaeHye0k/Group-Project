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
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
    <input 
      type="file" 
      accept="image/*" 
      onChange={handleImageChange} 
      style={{ fontSize: '12px' }} // 파일 선택 입력 폰트 사이즈 조정
    />
    <button 
      onClick={handleImageUpload} 
      disabled={uploading} 
      style={{ fontSize: '12px', padding: '1px 4px' }} // 버튼 내부 폰트와 패딩 조정
    >
      {uploading ? "Uploading..." : "Upload"}
    </button>
  </div>
);
}
export default ProfileImageUpdater;
