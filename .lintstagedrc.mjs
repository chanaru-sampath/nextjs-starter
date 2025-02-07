/**
 * @filename: .lintstagedrc.mjs
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{js,jsx,ts,tsx}': (stagedFiles) => [`eslint .`, `prettier --write ${stagedFiles.join(' ')}`],
};

export default config;
