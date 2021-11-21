import { ThemeContextProvider } from "./ThemeContext";
import { Box } from "./Box";

const UseContext = () => {
  return (
    <div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
};

export default UseContext;
