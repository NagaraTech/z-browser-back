import plugin from 'tailwindcss/plugin';
import btnComponent from './lib/components/btn';
import baseComponent from './lib/base/index';

const UIPlugin = plugin(({ addComponents }) => {
  addComponents(baseComponent);
  addComponents(btnComponent);
});
export default UIPlugin;
