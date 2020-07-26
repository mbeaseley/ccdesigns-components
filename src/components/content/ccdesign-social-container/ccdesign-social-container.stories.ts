import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Content | Social container',
  decorators: [withKnobs],
};

export const Default = () => {
  const iconOption = {
    Linkedin: 'linkedin',
    Twitter: 'twitter',
    Github: 'github',
    Envelope: 'envelope',
  };
  const icon = select('Icon', iconOption, iconOption.Envelope);

  return `
    <div class='story story--fit-content'>
      <ccdesign-social-container
        url='/'
        icon='${icon}'
      ></ccdesign-social-container>
    </div>
  `;
};
