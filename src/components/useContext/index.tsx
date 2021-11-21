import { ThemeContextProvider } from "./ThemeContext";
import { Box } from "./Box";
import { UserContextProvider } from "./UserContext";
import { User } from "./User";

const UseContext = () => {
  return (
    <div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
};

export default UseContext;
