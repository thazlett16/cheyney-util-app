import { defineConfig, Options } from "tsup";
import { esbuildPluginFilePathExtensions } from "esbuild-plugin-file-path-extensions";

export default defineConfig((options: Options) => {
    return {
        entry: {
            ["index"]: "src/index.ts",
        },
        format: ["cjs", "esm"],
        target: [
            "chrome91",
            "firefox90",
            "edge91",
            "safari15",
            "ios15",
            "opera77",
        ],
        outDir: "build",
        dts: true,
        sourcemap: true,
        clean: true,
        plugins: [
            esbuildPluginFilePathExtensions({
                esmExtension: "js",
            }),
        ],
        ...options,
    };
});
