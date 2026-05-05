import type { Preview } from '@storybook/react-vite';

import 'bulma/css/bulma.min.css';
import '../src/assets/styles/bulma.scss';
import './fixtag.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
