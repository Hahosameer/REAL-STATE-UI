import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    // Get the user data from localStorage
    const user = localStorage.getItem("user");
    // Parse it only if it exists
    return user ? JSON.parse(user) : null;
  });

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    // Save the currentUser to localStorage whenever it changes
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user"); // Clear localStorage if no user
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
