import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-5bc9bd7b.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["my-component",[[1,"my-component",{"barData":[32]}]]]], options);
});
