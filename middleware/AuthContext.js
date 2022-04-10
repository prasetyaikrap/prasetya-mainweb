import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userDB, setUserDB] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  async function logout() {
    setUser(null);
    await signOut(auth);
  }
  return (
    <AuthContext.Provider value={{ user, login, logout, userDB }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
