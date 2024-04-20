// ProfileImageUpdater.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { setUser, clearUser } from "../../../redux/user/auth/authSlice";

const ProfileImageUpdater = ({ auth, storage }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  const handleImageChange = async (event) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(setUser({ ...user, photoURL: reader.result }));
      };
      reader.readAsDataURL(file);

      if (storage) {
        const storageRef = ref(storage, `profile/${user.uid}`);
        try {
          const uploadTask = await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(uploadTask.ref);
          await updateProfile(auth.currentUser, { photoURL: downloadURL });
          dispatch(setUser({ ...user, photoURL: downloadURL }));
          alert("프로필 이미지가 업데이트 되었습니다.");
        } catch (error) {
          alert("이미지 업로드 실패: ", error.message);
        }
      }
    }
  };

const handleImageRemove = async () => {
  if (storage) {
    const storageRef = ref(storage, `profile/${user.uid}`);
    try {
      await deleteObject(storageRef);
      await updateProfile(auth.currentUser, { photoURL: null });
      dispatch(clearUser());
      alert("프로필 이미지가 삭제되었습니다.");
    } catch (error) {
      alert("이미지 삭제 실패: ", error.message);
    }
  }
};

  return (
    <div className="popup">
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={handleImageChange}
      />
      <button onClick={handleImageRemove}>이미지 삭제</button>
    </div>
  );
};

export default ProfileImageUpdater;
