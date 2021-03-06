/*
 * @Author: 清风
 * @Date: 2021-02-20 10:05:28
 * @Description: 
 */
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from "path";
declare var __dirname;
function reslove(dir: string): string {
  return path.resolve(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@": reslove("src"),
      "components": reslove("src/components"),
      "views": reslove("src/views"),
      "pages": reslove("src/pages"),
      "utils": reslove("src/utils"),
      "assets": reslove("src/assets"),
      "router": reslove("src/router")
    }
  },
  server: {
    port: 8080
  }
})
