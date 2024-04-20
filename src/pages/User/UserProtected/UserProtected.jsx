import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../../firebase";

const UserProtected = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!currentUser) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default UserProtected;
