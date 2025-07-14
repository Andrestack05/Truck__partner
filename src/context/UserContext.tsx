import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type TipoUsuario = "cliente" | "conductor" | null;

interface UserContextType {
  isLoggedIn: boolean;
  tipoUsuario: TipoUsuario;
  login: (tipo: TipoUsuario) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser debe usarse dentro de un UserProvider");
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState<TipoUsuario>(null);

  useEffect(() => {
    // Cargar desde localStorage si hay sesión
    const userSession = JSON.parse(localStorage.getItem("userSession") || "null");
    if (userSession?.tipoUsuario) {
      setIsLoggedIn(true);
      setTipoUsuario(userSession.tipoUsuario);
    }
  }, []);

  const login = (tipo: TipoUsuario) => {
    setIsLoggedIn(true);
    setTipoUsuario(tipo);
    localStorage.setItem("userSession", JSON.stringify({ tipoUsuario: tipo }));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setTipoUsuario(null);
    localStorage.removeItem("userSession");
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, tipoUsuario, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
