import type { StorybookConfig } from '@storybook/angular-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/angular-vite',
  viteFinal: (viteConfig) => {
    viteConfig.css ??= {};
    viteConfig.css.preprocessorOptions = {
      ...viteConfig.css.preprocessorOptions,
      scss: { quietDeps: true, silenceDeprecations: ['import'] },
    };

    return viteConfig;
  },
};
export default config;
