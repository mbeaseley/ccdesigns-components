export const storyStyles = `
  <style>
    .border { border: 1px solid red; display: block; text-align: center; margin: 20px; padding: 10px; }
    .boxContainer { display: block; background-color: red; text-align: center; padding: 20px;}
  </style>
`;

export const noteStyles = `
  <style>
    .noteTableFont {
      font-family: "Operator Mono","Fira Code Retina","Fira Code","FiraCode-Retina","Andale Mono","Lucida Console";
      -webkit-font-smoothing: antialiased; font-weight: 100 !important;
    }
    .notesTable {
      width: 100%; text-align: left; border-collapse: collapse;
    }
    .notesTable tbody tr{
      background-color: #636262 !important; border: 2px solid #eee; border-top: 2px solid #eee !important;
    }
    .notesTable tr th{
      font-weight: 100 !important;
    }
    code {
      background-color: #636262 !important; border: 2px solid #EEEEEE !important;
      padding: 10px !important; display: block;
    }
    p.error {
      background: #ffe2e2; color: #880b0b; padding: 5px 10px;
    }
    </style>`
  .replace(/^\s*/gm, "")
  .replace(/\n/g, "");

export const renderTable = arr => {
  const renderRow = (row, i) => {
    const entries = row.map(key => renderEntry(key, i)).join("");
    return `<tbody><tr>${entries}</tr></tbody>`;
  };

  const renderEntry = (key) => {
    return `<th>${key}</th>`;
  };

  try {
    return `<table class="notesTable noteTableFont">${arr.map(renderRow).join("")}</table>`;
  } catch (err) {
    // tslint:disable-next-line
    return `<p class="error">There was a problem rendering the table. Probable malformed JSON, check you have commas end of lines!!</p>`;
  }
};

export const renderHTML = text => {
  return text.replace(/[\<]/g, "&lt;").replace(/[\>]/g, "&gt;");
};
