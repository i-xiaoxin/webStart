import { config } from '@vue/test-utils';

// Example: set global config if needed
config.global.stubs = {
  // stub RouterLink and RouterView to simplify component testing without router
  RouterLink: {
    template: '<a><slot /></a>',
  },
  RouterView: {
    template: '<div><slot /></div>',
  },
};
