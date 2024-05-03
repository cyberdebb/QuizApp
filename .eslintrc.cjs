// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: [
    'react'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  rules: {
    "no-unused-vars": "off"  // Desativa a regra para variáveis não utilizadas
  },
  settings: {
    react: {
      version: 'detect'  // Detecta automaticamente a versão do React
    }
  }
};
