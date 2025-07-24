import { defineConfig } from "eslint-define-config";
import jsdoc from "eslint-plugin-jsdoc";
import html from "eslint-plugin-html";
import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";
import noUnsanitized from "eslint-plugin-no-unsanitized";
import prettier from "eslint-plugin-prettier";

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        es2021: true,
      },
    },
    ignores: ["dist/**/*"],
    plugins: {
      jsdoc,
      html,
      import: importPlugin,
      unicorn,
      "no-unsanitized": noUnsanitized,
      prettier,
    },
    rules: {
      "max-len": ["warn", { code: 80 }],
      "jsdoc/require-jsdoc": [
        "warn",
        { require: { FunctionDeclaration: true } },
      ],
      "prettier/prettier": ["warn", { singleQuote: true, semi: true }],
      eqeqeq: "warn",
      "no-console": "off",
      "no-alert": "warn",
      "import/order": ["warn", { groups: ["builtin", "external", "internal"] }],
      "import/newline-after-import": "warn",
      "unicorn/prefer-query-selector": "error",
      "unicorn/no-null": "warn",
      "no-unsanitized/method": "error",
      "no-unsanitized/propperty": "error",
    },
  },
  {
    files: [".eslintrc.{js,cjs}"],
    languageOptions: {
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: "script",
      },
    },
  },
]);
