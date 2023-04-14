import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/large-screen2/dist/",
  plugins: [reactRefresh()],
});
