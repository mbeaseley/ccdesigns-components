import { renderTable, noteStyles } from './utils';
export default {
    title: 'Global Styles | Colours',
};
const colorStyles = `
  <style>
    .notesTable tr {
      display: flex;
      align-items: center;
    }
    .notesTable th {
      width: 100%;
    }
    .notesTable th:nth-of-type(odd) {
      max-width: 100px;
    }
    .color {
      width: 100%;
      height: 30px;
    }
    .color--white {
      background-color: #fff;
    }
    .color--grey-1 {
      background-color: #b4b4b4;
    }
    .color--grey-2 {
      background-color: #424242;
    }
    .color--grey-3 {
      background-color: #252525;
    }
    .color--grey-4 {
      background-color: #1b1b1b;
    }
    .color--black {
      background-color: #000;
    }
    .color--light-blue {
      background-color: #80e3ff;
    }
    .color--dark-blue {
      background-color: #181852;
    }
    .color--inner-circle {
      background-color: rgba(128, 227, 255, 1);
    }
    .color--outer-circle {
      background-color: rgba(55, 210, 253, 0.8);
    }
    .color--icons-blue {
      background-color: #007bff;
    }
    .color--icons-blue-action {
      background-color: #0056b3;
    }
    .color--grey-color {
      background-color: rgba(255, 255, 255, 0.5);
    }
    .color--grey-border {
      background-color: rgba(255, 255, 255, 0.1);
    }
  </style>
`;
export const Default = () => {
    return `
    ${colorStyles}
    ${noteStyles}
    <h2>Available Colours</h2>
    <br />
    ${renderTable([
        ['$cc-white', '<div class="color color--white"></div>'],
        ['$cc-grey1', '<div class="color color--grey-1"></div>'],
        ['$cc-grey2', '<div class="color color--grey-2"></div>'],
        ['$cc-grey3', '<div class="color color--grey-3"></div>'],
        ['$cc-grey4', '<div class="color color--grey-4"></div>'],
        ['$cc-black', '<div class="color color--black"></div>'],
        ['$cc-light-blue', '<div class="color color--light-blue"></div>'],
        ['$cc-dark-blue', '<div class="color color--dark-blue"></div>'],
        ['$cc-inner-circle', '<div class="color color--inner-circle"></div>'],
        ['$cc-outer-circle', '<div class="color color--outer-circle"></div>'],
        ['$cc-icons-blue', '<div class="color color--icons-blue"></div>'],
        ['$cc-icons-blue-action', '<div class="color color--icons-blue-action"></div>'],
        ['$cc-grey-color', '<div class="color color--grey-color"></div>'],
        ['$cc-grey-border', '<div class="color color--grey-border"></div>'],
    ])}
  `;
};
