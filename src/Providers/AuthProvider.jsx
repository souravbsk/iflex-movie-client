/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Utils/firebase.config";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "../Redux/AuthSlice/AuthSlice";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const googleAuthProver = new GoogleAuthProvider();

  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setUser(currentUser));
      dispatch(setLoading(false));
    });
    return () => {
      unSubscribe();
    };
  });

  const signInWithGoogle = () => {
    dispatch(setLoading(true));
    return signInWithPopup(auth, googleAuthProver);
  };


  const logOut = () => {
    return signOut(auth);
  }

  const authValue = {
    signInWithGoogle,
    logOut
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
