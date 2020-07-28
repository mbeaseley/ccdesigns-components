import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'UI | Separator',
  decorators: [withA11y],
};

export const Default = () => `
  <div class='story'>
    <ccdesign-separator />
  </div>
`;
