// ESLint Flat Config (ESM) for Vue 3 + TypeScript (non-type-checked)
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import vueParser from 'vue-eslint-parser';

export default [
  { ignores: ['dist', 'node_modules', '.vite', 'coverage'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  {
    files: ['**/*.vue', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
];
