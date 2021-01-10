import buble from "@rollup/plugin-buble";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    name: "Motion",
    exports: "named",
  },
  plugins: [
    commonjs(),
    // jsx({
    //   factory: "React.createElement",
    // }),
    buble({
      objectAssign: "Object.assign",
    }),
  ],
};
