import buble from "@rollup/plugin-buble";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    name: "Motion",
    exports: "named",
  },
  plugins: [
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    buble({
      objectAssign: "Object.assign",
    }),
  ],
  external: ["react", "react-dom"],
};
