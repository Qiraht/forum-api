import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default [
  daStyle,
  { files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 2021 },
    rules:{
      'no-console': 'off',
      'linebreak-style': 'off',
      'no-underscore-dangle': 'off',
      'camelcase': 'off',
    } },
  { languageOptions:
    { globals: { ...globals.browser, ...globals.node, ...globals.jest } } },
  pluginJs.configs.recommended,
];