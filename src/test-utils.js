import { createTheme, ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { arrayOf, node, string } from "prop-types";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const client = new QueryClient();

/**
 * AppTechnicalContext
 *
 * We SHOULD use the exact same order than inside our <App /> for all our providers
 */
const AppTechnicalContext = ({
  children,
  path = "/",
  initialEntries = ["/"],
}) => {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={createTheme()}>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route path={path} element={children} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

AppTechnicalContext.propTypes = {
  children: node,
  path: string,
  initialEntries: arrayOf(string),
};

const customRender = (component, options = {}) => {
  const { path, initialEntries, ...renderOptions } = options;

  return render(component, {
    wrapper: ({ children }) => (
      <AppTechnicalContext path={path} initialEntries={initialEntries}>
        {children}
      </AppTechnicalContext>
    ),
    ...renderOptions,
  });
};

// eslint-disable-next-line import/export
export * from "@testing-library/react";
// eslint-disable-next-line import/export
export { customRender as render };
