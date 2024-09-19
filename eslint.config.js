/** @type {import('eslint').Linter.FlatConfig} */
module.exports = [
  {
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      // Falls du Plugins verwendest, füge sie hier hinzu
    },
    rules: {
      eqeqeq: ['error', 'always'],
      'no-unused-vars': ['error'], // Zeigt Warnungen für nicht verwendete Variablen an
      'prefer-const': ['error'], // Zeigt Fehler an, wenn `let` verwendet wird, obwohl die Variable nie neu zugewiesen wird
    },
  },
];
