import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

import { type ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};


// ✅ Correct useAuth hook
export const useAuth = () => {
  const context = useContext(AuthContext); // ← You forgot this line
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};