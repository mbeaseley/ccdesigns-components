import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'UI | Button',
  decorators: [withKnobs, withA11y],
};

export const Default = () => {
  const icon = text('Icon name', 'chevron-left');
  const buttonKindOption = {
    Link: 'url',
    ['Function Call']: 'eventName',
  };
  const buttonKind = select('Kind', buttonKindOption, buttonKindOption.Link);
  const buttonTypeOption = {
    Text: 'text',
    Default: 'default',
  };
  const buttonType = select('Type', buttonTypeOption, buttonTypeOption.Default);
  const colorOptions = {
    White: 'white',
    ['Light Grey']: 'light-grey',
    Grey: 'grey',
    ['Dark Grey']: 'dark-grey',
    Black: 'black',
    Blue: 'blue',
  };
  const color = select('Colour', colorOptions, colorOptions['Dark Grey']);
  const altTag = text('alt', 'Alt Content Here');
  const content = text('Text', 'Button Text');

  return `
    <div class='story story--fit-content'>
      <ccdesign-button icon='${icon}' color='${color}' ${buttonKind}='' type='${buttonType}' alt='${altTag}'>${content}</ccdesign-button>
    </div>
  `;
};
