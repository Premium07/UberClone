import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <UserDataContext.Provider value={{ user, setUser, loading, setLoading }}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
