const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "~apis": path.resolve(__dirname, "src/apis/"),
      "~components": path.resolve(__dirname, "src/components"),
      "~services": path.resolve(__dirname, "src/services"),
      "~utils": path.resolve(__dirname, "src/utils"),
      "~store": path.resolve(__dirname, "src/store"),
    },
  },
};
