module.exports = {
  root: true,

  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off'
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },

  extends: [
    'plugin:vue/essential',
    '@vue/typescript',
    '@vue/standard'
  ],

  env: {
    browser: true,
    node: true,
  },

  plugins: [
    'vue'
  ]
}
