import type { Config } from '@acot/types';

const config: Config = {
  extends: ['./configs/base'],
  rules: {
    '@acot/wcag/interactive-has-name': 'error',
    '@acot/wcag/interactive-supports-focus': 'error',
    '@acot/wcag/interactive-has-enough-size': 'error',
    '@acot/wcag/page-has-title': 'error',
  },
};

export default config;
