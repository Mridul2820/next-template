import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".next",
  ]),
  // Custom rule overrides
  {
    rules: {
      "import/no-named-as-default": 0,
      "react/prop-types": 0,
      "import/extensions": 0,
      "react/react-in-jsx-scope": 0,
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      "react/display-name": 1,
      "no-empty": 0,
      "no-unused-vars": 1,
      "no-console": 1,
      "@next/next/no-img-element": 1,
      "@next/next/no-html-link-for-pages": 0,
      "import/no-anonymous-default-export": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "prefer-const": 0,
      "react-hooks/exhaustive-deps": 0,
      "@typescript-eslint/triple-slash-reference": 0,
    },
  },
]);

export default eslintConfig;
