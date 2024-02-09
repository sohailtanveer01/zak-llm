// vite.config.js
import { defineConfig } from "file:///Users/sohail/Desktop/new-anything/anotherllm/anything-llm/frontend/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "url";

// postcss.config.js
import tailwind from "file:///Users/sohail/Desktop/new-anything/anotherllm/anything-llm/frontend/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/sohail/Desktop/new-anything/anotherllm/anything-llm/frontend/node_modules/autoprefixer/lib/autoprefixer.js";

// tailwind.config.js
var tailwind_config_default = {
  content: {
    relative: true,
    files: [
      "./src/components/**/*.{js,jsx}",
      "./src/hooks/**/*.js",
      "./src/models/**/*.js",
      "./src/pages/**/*.{js,jsx}",
      "./src/utils/**/*.js",
      "./src/*.jsx",
      "./index.html"
    ]
  },
  theme: {
    extend: {
      rotate: {
        "270": "270deg",
        "360": "360deg"
      },
      colors: {
        "black-900": "#141414",
        accent: "#3D4147",
        "sidebar-button": "#31353A",
        sidebar: "#25272C",
        "historical-msg-system": "rgba(255, 255, 255, 0.05);",
        "historical-msg-user": "#2C2F35"
      },
      backgroundImage: {
        "preference-gradient": "linear-gradient(180deg, #5A5C63 0%, rgba(90, 92, 99, 0.28) 100%);",
        "chat-msg-user-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%);",
        "selected-preference-gradient": "linear-gradient(180deg, #313236 0%, rgba(63.40, 64.90, 70.13, 0) 100%);",
        "main-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
        "modal-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
        "sidebar-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
        "menu-item-gradient": "linear-gradient(90deg, #3D4147 0%, #2C2F35 100%)",
        "menu-item-selected-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
        "workspace-item-gradient": "linear-gradient(90deg, #3D4147 0%, #2C2F35 100%)",
        "workspace-item-selected-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
        "switch-selected": "linear-gradient(146deg, #5B616A 0%, #3F434B 100%)"
      },
      fontFamily: {
        sans: [
          "plus-jakarta-sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      },
      animation: {
        sweep: "sweep 0.5s ease-in-out"
      },
      keyframes: {
        sweep: {
          "0%": { transform: "scaleX(0)", transformOrigin: "bottom left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "bottom left" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      }
    }
  },
  plugins: []
};

// postcss.config.js
var postcss_config_default = {
  plugins: [tailwind(tailwind_config_default), autoprefixer]
};

// vite.config.js
import react from "file:///Users/sohail/Desktop/new-anything/anotherllm/anything-llm/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dns from "dns";
import { visualizer } from "file:///Users/sohail/Desktop/new-anything/anotherllm/anything-llm/frontend/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/sohail/Desktop/new-anything/anotherllm/anything-llm/frontend/vite.config.js";
dns.setDefaultResultOrder("verbatim");
var vite_config_default = defineConfig({
  server: {
    port: 3e3,
    host: "localhost"
  },
  define: {
    "process.env": process.env
  },
  css: {
    postcss: postcss_config_default
  },
  plugins: [
    react(),
    visualizer({
      template: "treemap",
      // or sunburst
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: "bundleinspector.html"
      // will be saved in project's root
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      },
      {
        process: "process/browser",
        stream: "stream-browserify",
        zlib: "browserify-zlib",
        util: "util",
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        }
      }
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis"
      },
      plugins: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicG9zdGNzcy5jb25maWcuanMiLCAidGFpbHdpbmQuY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3NvaGFpbC9EZXNrdG9wL25ldy1hbnl0aGluZy9hbm90aGVybGxtL2FueXRoaW5nLWxsbS9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3NvaGFpbC9EZXNrdG9wL25ldy1hbnl0aGluZy9hbm90aGVybGxtL2FueXRoaW5nLWxsbS9mcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc29oYWlsL0Rlc2t0b3AvbmV3LWFueXRoaW5nL2Fub3RoZXJsbG0vYW55dGhpbmctbGxtL2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcInVybFwiXG5pbXBvcnQgcG9zdGNzcyBmcm9tIFwiLi9wb3N0Y3NzLmNvbmZpZy5qc1wiXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCJcbmltcG9ydCBkbnMgZnJvbSBcImRuc1wiXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiXG5cbmRucy5zZXREZWZhdWx0UmVzdWx0T3JkZXIoXCJ2ZXJiYXRpbVwiKVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgICBob3N0OiBcImxvY2FsaG9zdFwiXG4gIH0sXG4gIGRlZmluZToge1xuICAgIFwicHJvY2Vzcy5lbnZcIjogcHJvY2Vzcy5lbnZcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzc1xuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB2aXN1YWxpemVyKHtcbiAgICAgIHRlbXBsYXRlOiBcInRyZWVtYXBcIiwgLy8gb3Igc3VuYnVyc3RcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgZ3ppcFNpemU6IHRydWUsXG4gICAgICBicm90bGlTaXplOiB0cnVlLFxuICAgICAgZmlsZW5hbWU6IFwiYnVuZGxlaW5zcGVjdG9yLmh0bWxcIiAvLyB3aWxsIGJlIHNhdmVkIGluIHByb2plY3QncyByb290XG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQFwiLFxuICAgICAgICByZXBsYWNlbWVudDogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb2Nlc3M6IFwicHJvY2Vzcy9icm93c2VyXCIsXG4gICAgICAgIHN0cmVhbTogXCJzdHJlYW0tYnJvd3NlcmlmeVwiLFxuICAgICAgICB6bGliOiBcImJyb3dzZXJpZnktemxpYlwiLFxuICAgICAgICB1dGlsOiBcInV0aWxcIixcbiAgICAgICAgZmluZDogL15+LisvLFxuICAgICAgICByZXBsYWNlbWVudDogKHZhbCkgPT4ge1xuICAgICAgICAgIHJldHVybiB2YWwucmVwbGFjZSgvXn4vLCBcIlwiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICBidWlsZDoge1xuICAgIGNvbW1vbmpzT3B0aW9uczoge1xuICAgICAgdHJhbnNmb3JtTWl4ZWRFc01vZHVsZXM6IHRydWVcbiAgICB9XG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGVzYnVpbGRPcHRpb25zOiB7XG4gICAgICBkZWZpbmU6IHtcbiAgICAgICAgZ2xvYmFsOiBcImdsb2JhbFRoaXNcIlxuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6IFtdXG4gICAgfVxuICB9XG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc29oYWlsL0Rlc2t0b3AvbmV3LWFueXRoaW5nL2Fub3RoZXJsbG0vYW55dGhpbmctbGxtL2Zyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc29oYWlsL0Rlc2t0b3AvbmV3LWFueXRoaW5nL2Fub3RoZXJsbG0vYW55dGhpbmctbGxtL2Zyb250ZW5kL3Bvc3Rjc3MuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zb2hhaWwvRGVza3RvcC9uZXctYW55dGhpbmcvYW5vdGhlcmxsbS9hbnl0aGluZy1sbG0vZnJvbnRlbmQvcG9zdGNzcy5jb25maWcuanNcIjtpbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCB0YWlsd2luZENvbmZpZyBmcm9tICcuL3RhaWx3aW5kLmNvbmZpZy5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwbHVnaW5zOiBbdGFpbHdpbmQodGFpbHdpbmRDb25maWcpLCBhdXRvcHJlZml4ZXJdLFxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3NvaGFpbC9EZXNrdG9wL25ldy1hbnl0aGluZy9hbm90aGVybGxtL2FueXRoaW5nLWxsbS9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3NvaGFpbC9EZXNrdG9wL25ldy1hbnl0aGluZy9hbm90aGVybGxtL2FueXRoaW5nLWxsbS9mcm9udGVuZC90YWlsd2luZC5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3NvaGFpbC9EZXNrdG9wL25ldy1hbnl0aGluZy9hbm90aGVybGxtL2FueXRoaW5nLWxsbS9mcm9udGVuZC90YWlsd2luZC5jb25maWcuanNcIjsvKiogQHR5cGUge2ltcG9ydCgndGFpbHdpbmRjc3MnKS5Db25maWd9ICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRlbnQ6IHtcbiAgICByZWxhdGl2ZTogdHJ1ZSxcbiAgICBmaWxlczogW1xuICAgICAgXCIuL3NyYy9jb21wb25lbnRzLyoqLyoue2pzLGpzeH1cIixcbiAgICAgIFwiLi9zcmMvaG9va3MvKiovKi5qc1wiLFxuICAgICAgXCIuL3NyYy9tb2RlbHMvKiovKi5qc1wiLFxuICAgICAgXCIuL3NyYy9wYWdlcy8qKi8qLntqcyxqc3h9XCIsXG4gICAgICBcIi4vc3JjL3V0aWxzLyoqLyouanNcIixcbiAgICAgIFwiLi9zcmMvKi5qc3hcIixcbiAgICAgIFwiLi9pbmRleC5odG1sXCJcbiAgICBdXG4gIH0sXG4gIHRoZW1lOiB7XG4gICAgZXh0ZW5kOiB7XG4gICAgICByb3RhdGU6IHtcbiAgICAgICAgXCIyNzBcIjogXCIyNzBkZWdcIixcbiAgICAgICAgXCIzNjBcIjogXCIzNjBkZWdcIlxuICAgICAgfSxcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBcImJsYWNrLTkwMFwiOiBcIiMxNDE0MTRcIixcbiAgICAgICAgYWNjZW50OiBcIiMzRDQxNDdcIixcbiAgICAgICAgXCJzaWRlYmFyLWJ1dHRvblwiOiBcIiMzMTM1M0FcIixcbiAgICAgICAgc2lkZWJhcjogXCIjMjUyNzJDXCIsXG4gICAgICAgIFwiaGlzdG9yaWNhbC1tc2ctc3lzdGVtXCI6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcIixcbiAgICAgICAgXCJoaXN0b3JpY2FsLW1zZy11c2VyXCI6IFwiIzJDMkYzNVwiXG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZEltYWdlOiB7XG4gICAgICAgIFwicHJlZmVyZW5jZS1ncmFkaWVudFwiOlxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzVBNUM2MyAwJSwgcmdiYSg5MCwgOTIsIDk5LCAwLjI4KSAxMDAlKTtcIixcbiAgICAgICAgXCJjaGF0LW1zZy11c2VyLWdyYWRpZW50XCI6XG4gICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjM0Q0MTQ3IDAlLCAjMkMyRjM1IDEwMCUpO1wiLFxuICAgICAgICBcInNlbGVjdGVkLXByZWZlcmVuY2UtZ3JhZGllbnRcIjpcbiAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzMTMyMzYgMCUsIHJnYmEoNjMuNDAsIDY0LjkwLCA3MC4xMywgMCkgMTAwJSk7XCIsXG4gICAgICAgIFwibWFpbi1ncmFkaWVudFwiOiBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzRDQxNDcgMCUsICMyQzJGMzUgMTAwJSlcIixcbiAgICAgICAgXCJtb2RhbC1ncmFkaWVudFwiOiBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzRDQxNDcgMCUsICMyQzJGMzUgMTAwJSlcIixcbiAgICAgICAgXCJzaWRlYmFyLWdyYWRpZW50XCI6IFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNUI2MTZBIDAlLCAjM0Y0MzRCIDEwMCUpXCIsXG4gICAgICAgIFwibWVudS1pdGVtLWdyYWRpZW50XCI6XG4gICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzRDQxNDcgMCUsICMyQzJGMzUgMTAwJSlcIixcbiAgICAgICAgXCJtZW51LWl0ZW0tc2VsZWN0ZWQtZ3JhZGllbnRcIjpcbiAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCg5MGRlZywgIzVCNjE2QSAwJSwgIzNGNDM0QiAxMDAlKVwiLFxuICAgICAgICBcIndvcmtzcGFjZS1pdGVtLWdyYWRpZW50XCI6XG4gICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzRDQxNDcgMCUsICMyQzJGMzUgMTAwJSlcIixcbiAgICAgICAgXCJ3b3Jrc3BhY2UtaXRlbS1zZWxlY3RlZC1ncmFkaWVudFwiOlxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNUI2MTZBIDAlLCAjM0Y0MzRCIDEwMCUpXCIsXG4gICAgICAgIFwic3dpdGNoLXNlbGVjdGVkXCI6IFwibGluZWFyLWdyYWRpZW50KDE0NmRlZywgIzVCNjE2QSAwJSwgIzNGNDM0QiAxMDAlKVwiXG4gICAgICB9LFxuICAgICAgZm9udEZhbWlseToge1xuICAgICAgICBzYW5zOiBbXG4gICAgICAgICAgXCJwbHVzLWpha2FydGEtc2Fuc1wiLFxuICAgICAgICAgIFwidWktc2Fucy1zZXJpZlwiLFxuICAgICAgICAgIFwic3lzdGVtLXVpXCIsXG4gICAgICAgICAgXCItYXBwbGUtc3lzdGVtXCIsXG4gICAgICAgICAgXCJCbGlua01hY1N5c3RlbUZvbnRcIixcbiAgICAgICAgICAnXCJTZWdvZSBVSVwiJyxcbiAgICAgICAgICBcIlJvYm90b1wiLFxuICAgICAgICAgICdcIkhlbHZldGljYSBOZXVlXCInLFxuICAgICAgICAgIFwiQXJpYWxcIixcbiAgICAgICAgICAnXCJOb3RvIFNhbnNcIicsXG4gICAgICAgICAgXCJzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgJ1wiQXBwbGUgQ29sb3IgRW1vamlcIicsXG4gICAgICAgICAgJ1wiU2Vnb2UgVUkgRW1vamlcIicsXG4gICAgICAgICAgJ1wiU2Vnb2UgVUkgU3ltYm9sXCInLFxuICAgICAgICAgICdcIk5vdG8gQ29sb3IgRW1vamlcIidcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBzd2VlcDogXCJzd2VlcCAwLjVzIGVhc2UtaW4tb3V0XCJcbiAgICAgIH0sXG4gICAgICBrZXlmcmFtZXM6IHtcbiAgICAgICAgc3dlZXA6IHtcbiAgICAgICAgICBcIjAlXCI6IHsgdHJhbnNmb3JtOiBcInNjYWxlWCgwKVwiLCB0cmFuc2Zvcm1PcmlnaW46IFwiYm90dG9tIGxlZnRcIiB9LFxuICAgICAgICAgIFwiMTAwJVwiOiB7IHRyYW5zZm9ybTogXCJzY2FsZVgoMSlcIiwgdHJhbnNmb3JtT3JpZ2luOiBcImJvdHRvbSBsZWZ0XCIgfVxuICAgICAgICB9LFxuICAgICAgICBmYWRlSW46IHtcbiAgICAgICAgICBcIjAlXCI6IHsgb3BhY2l0eTogMCB9LFxuICAgICAgICAgIFwiMTAwJVwiOiB7IG9wYWNpdHk6IDEgfVxuICAgICAgICB9LFxuICAgICAgICBmYWRlT3V0OiB7XG4gICAgICAgICAgXCIwJVwiOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgICAgICBcIjEwMCVcIjogeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW11cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlgsU0FBUyxvQkFBb0I7QUFDeFosU0FBUyxlQUFlLFdBQVc7OztBQ0Q4VixPQUFPLGNBQWM7QUFDdFosT0FBTyxrQkFBa0I7OztBQ0F6QixJQUFPLDBCQUFRO0FBQUEsRUFDYixTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixRQUFRO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFFBQ1Isa0JBQWtCO0FBQUEsUUFDbEIsU0FBUztBQUFBLFFBQ1QseUJBQXlCO0FBQUEsUUFDekIsdUJBQXVCO0FBQUEsTUFDekI7QUFBQSxNQUNBLGlCQUFp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
