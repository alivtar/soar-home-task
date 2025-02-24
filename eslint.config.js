import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import sonarjs from "eslint-plugin-sonarjs";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * ESLint configuration.
 *
 * @see https://eslint.org/docs/user-guide/configuring
 * @type {import("eslint").Linter.Config}
 */
export default tseslint.config(
  { ignores: ["dist", "/.cache", "/.git", "/.husky", "/.yarn"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    files: ["*.ts", "*.tsx"],
    plugins: {
      sonarjs,
      "unused-imports": unusedImports,
      react,
      prettier,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/default": "off",
      "react/no-children-prop": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",
      "sonarjs/no-duplicate-string": "off",
      "sonarjs/cognitive-complexity": ["warn", 50],
      "sonarjs/prefer-immediate-return": "warn",
      complexity: ["warn", { max: 20 }],
      "max-depth": "error",
      "max-params": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
      "react/jsx-curly-brace-presence": "warn",
      "react/jsx-boolean-value": "warn",
      "react/jsx-max-depth": ["warn", { max: 8 }],
      "react/no-array-index-key": "warn",
      "react/jsx-pascal-case": "warn",
      "react/self-closing-comp": "warn",
      "import/no-duplicates": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          fixStyle: "inline-type-imports",
        },
      ],
      // https://tkdodo.eu/blog/array-types-in-type-script
      "@typescript-eslint/array-type": [
        "error",
        {
          default: "generic",
        },
      ],
      "unused-imports/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
);
