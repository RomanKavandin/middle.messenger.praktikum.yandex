import cssnanoPlugin from "cssnano";
import postcssPresetEnv from "postcss-preset-env";
export default {
  plugins: [
    cssnanoPlugin({
      preset: "default",
    }),
    postcssPresetEnv({ stage: 1 }),
  ],
};
