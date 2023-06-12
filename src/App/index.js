import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import theme from "./theme";
import router from "./router";
import { UserContext } from "../contexts";

const queryClient = new QueryClient();

const user = { isLoggedIn: true };

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserContext.Provider user={user}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
