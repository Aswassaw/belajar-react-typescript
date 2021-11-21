import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext?.setUser({
      name: "Andry Pebrianto",
      email: "aswassaw227@gmail.com",
    });
  };
  const handleLogout = () => {
    userContext?.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name || "Unknown"}</div>
      <div>Email name is {userContext?.user?.email || "Unknown"}</div>
    </div>
  );
};
