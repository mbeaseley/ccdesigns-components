export default {
  title: 'Template | CV Template',
};

export const Default = () => `
  <ccdesign-cv-template header="[{ id: 'home', name: 'Home', url: '/' }, { id: 'portfolio', name: 'Portfolio', url: '/portfolio'}]" footer="{ id: 'ccdesign footer', text: '© 2019 Copyright: Michael Beaseley', backgroundColor: 'dark-grey'}">
    <div class="page__body--left highlight">
      <div slot="left-side">
        <p>LEFT SIDE</p>
        <p>
          Template showed here is used at <a href="https://ccdesign.me.uk/">https://ccdesign.me.uk/</a>. Highlights template contains 2 slots: left-side & right-side.</div>
        </p>
      </div>
    </div>
    <div class="page__body--right highlight">
      <div slot="right-side">
        <p>RIGHT SIDE</p>
      </div>
    </div>
  </ccdesign-cv-template>
`;
