System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "videojsima": "github:guardian/videojs-ima@0.2.1"
  }
});
