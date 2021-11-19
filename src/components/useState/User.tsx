import { useState } from "react";

interface AuthUser {
  data: {
    name: string;
    email: string;
  };
}

export const User = () => {
  const [user, setUser] = useState<null | AuthUser>(null);

  const handleLogin = () => {
    setUser({
      data: {
        name: "Andry PA",
        email: "asw@gmail.com",
      },
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.data.name || "Guest"}</div>
      <div>User email is {user?.data.email || "guest@gmail.com"}</div>
    </div>
  );
};
