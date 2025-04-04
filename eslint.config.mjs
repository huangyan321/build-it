import antfu from '@antfu/eslint-config';

export default antfu({
  unocss: false,
  react: true,
  vue: true,
  rules: {
    'no-new': 'off',
    'no-console': 'off',
    'ts/ban-ts-comment': 'off',
    'ts/no-require-imports': 'off',
    'eqeqeq': 'off',
    'vue/eqeqeq': 'off',
    'regexp/no-misleading-capturing-group': 'off',
    'vue/component-definition-name-casing': 'off',
  },
  typescript: true,
  stylistic: {
    semi: true,
    jsx: true,
    overrides: {},
  },
  ignores: [
    'types/**',
    '.entry-dist/**',
    '.low-code/**',
    '.prettierrc',
    '**/.prettierrc/**',
    'pnpm*',
    '**/pnpm*/**',
    '!commitlint.config.js',
    '!**/commitlint.config.js/**',
    '.babel.config.js',
    '**/.babel.config.js/**',
    '!.umirc.ts',
    '!**/.umirc.ts/**',
    '*.md',
    '**/*.md/**',
    '*.drawio',
    '*.html',
    '**/*.html/**',
    'docs/**',
    '**/compiled/**',
    'commitlint.config.ts',
  ],
});
