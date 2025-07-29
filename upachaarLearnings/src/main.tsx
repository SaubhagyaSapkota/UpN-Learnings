import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/themeContext.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

const container = document.getElementById("root")
if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <StrictMode>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StrictMode>
    </Provider>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
