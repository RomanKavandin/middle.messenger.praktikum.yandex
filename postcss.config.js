import cssnanoPlugin from "cssnano";
import postcssExtend from "postcss-extend";
import postcssPresetEnv from "postcss-preset-env";
export default {
  plugins: [
    cssnanoPlugin({
      preset: "default",
    }),
    postcssExtend(),
    postcssPresetEnv({ stage: 1 }),
  ],
};
