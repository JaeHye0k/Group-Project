import React, { useEffect, useState } from "react";

const ProfileImageManager = ({ user }) => {
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  useEffect(() => {
    const fetchProfileImage = () => {
      if (user) {
        const storedImageData = localStorage.getItem("imageData");
        if (storedImageData) {
          const parsedImageData = JSON.parse(storedImageData);
          const userImageData = parsedImageData.find(
            (data) => data.email === user.email
          );
          if (userImageData) {
            setProfileImageUrl(userImageData.imageUrl);
          }
        }
      }
    };

    fetchProfileImage();
  }, [user]);

  useEffect(() => {
    if (profileImageUrl && user) {
      const storedImageData = localStorage.getItem("imageData") || "[]";
      const parsedImageData = JSON.parse(storedImageData);
      const updatedImageData = parsedImageData.filter(
        (data) => data.email !== user.email
      );
      updatedImageData.push({ email: user.email, imageUrl: profileImageUrl });
      localStorage.setItem("imageData", JSON.stringify(updatedImageData));
    }
  }, [profileImageUrl, user]);

  return <>{/* 프로필 사진을 렌더링하는 컴포넌트 */}</>;
};

export default ProfileImageManager;
