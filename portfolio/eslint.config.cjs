const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const reactPlugin = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");

module.exports = [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    ignores: ["dist", ".eslintrc.cjs"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        warnOnUnsupportedTypeScriptVersion: false,
        createDefaultProgram: true,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "max-len": ["error", { code: 80 }],
      "@typescript-eslint/semi": "off"
    },
  },
];