import { useEffect, useState } from "react";

export const useAuth = (): boolean => {
  const token = localStorage.getItem("token");

  const [isAuth, setIsAuth] = useState<boolean>(token ? true : false);

  useEffect(() => {
    setIsAuth(token ? true : false);
  }, [token]);

  return isAuth;
};
