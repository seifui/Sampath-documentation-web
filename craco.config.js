const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components/index.ts"),
      "@pages": path.resolve(__dirname, "./src/pages/index.ts"),
      "@types": path.resolve(__dirname, "./src/types/index.ts"),
      "@assets": path.resolve(__dirname, "./src/assets/index.ts"),
    },
  },
};
