import { withKnobs, text } from '@storybook/addon-knobs';
import { renderTable, noteStyles } from './utils';
export default {
    title: 'Global Styles | Typography',
    decorators: [withKnobs],
};
export const Default = () => {
    const h1 = text('h1 Text', 'Example Header');
    const h2 = text('h2 Text', 'Example Header');
    const h3 = text('h3 Text', 'Example Header');
    const p = text('p Text', 'Example Text');
    const a = text('a Text', 'Example Link Text');
    const li = text('li Text', 'Example bullet Text');
    return `
    ${noteStyles}
    <h2>Typography</h2>
    <br />
    ${renderTable([
        ['h1', `<ccdesign-copy copy='<h1>${h1}</h1>'></ccdesign-copy>`],
        ['h2', `<ccdesign-copy copy='<h2>${h2}</h2>'></ccdesign-copy>`],
        ['h3', `<ccdesign-copy copy='<h3>${h3}</h3>'></ccdesign-copy>`],
        ['p', `<ccdesign-copy copy='<p>${p}</p>'></ccdesign-copy>`],
        ['a', `<ccdesign-copy copy='<a href="">${a}</a>'></ccdesign-copy>`],
        ['li', `<ccdesign-copy copy='<li>${li}</li>'></ccdesign-copy>`],
    ])}
  `;
};
