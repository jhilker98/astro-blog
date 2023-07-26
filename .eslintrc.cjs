module.exports = {
  // ...
  extends: [
    // ...
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  // ...
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },

  "env": {
    "es6": true
  },
  ignorePatterns: ["src/env.d.ts"],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        "astro/no-set-html-directive": "error",
        "astro/prefer-class-list-directive": "error"
      },
    },
    // ...
  ],
}