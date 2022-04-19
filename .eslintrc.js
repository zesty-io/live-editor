module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: ["plugin:react/recommended", "google", "prettier"],
   parser: "@typescript-eslint/parser",
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
   },
   plugins: ["react", "@typescript-eslint", "import", "prefer-arrow"],
   rules: {
      "no-unused-vars": "off",
      "react/jsx-key": 0,
      "require-jsdoc": 0,
      "no-use-before-define": "off",
      "react/react-in-jsx-scope": "off",
      "new-cap": 0,
      "import/extensions": [
         "error",
         "ignorePackages",
         {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
         },
      ],
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", "tsx"] }],
      "import/extensions": [
         "error",
         "ignorePackages",
         {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
         },
      ],
      "spaced-comment": [
         "error",
         "always",
         {
            line: {
               markers: ["/"],
            },
         },
      ],
   },
   settings: {
      react: {
         version: "detect",
      },
      "import/resolver": {
         node: {
            extensions: [".js", ".jsx", ".tsx"],
         },
      },
   },
}
