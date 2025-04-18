import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import checkFilePlugin from 'eslint-plugin-check-file';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'build', 'public'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      prettier,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'check-file': checkFilePlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error',

      'check-file/filename-naming-convention': [
        'error',
        {
          'src/components/**/*.tsx': 'PASCAL_CASE',
          '**/*.ts': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'no-restricted-imports': [
        'error',
        {
          patterns: ['../*'], // ❌ block relative imports outside current folder
        },
      ],

      // 'check-file/folder-naming-convention': [
      //   'error',
      //   {
      //     'src/**/!(__tests__)': 'KEBAB_CASE',
      //   },
      // ],
    },
  }
);
