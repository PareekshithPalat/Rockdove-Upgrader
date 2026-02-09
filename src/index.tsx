import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "../tailwind.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Preloader removal logic
const loader = document.getElementById("preloader");
if (loader) {
  // Wait for 4s (matching the plane animation)
  setTimeout(() => {
    document.body.classList.add("loaded");
    loader.classList.add("hidden");
    // Remove element after fade transition
    setTimeout(() => loader.remove(), 1000);
  }, 4000);
}