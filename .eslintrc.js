module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: ["eslint:recommended", "prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
        indent: ["error", 4],
        "linebreak-style": "off",
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
};
