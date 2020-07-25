export default {
  title: 'Content | Image Card',
};

export const Default = () => `
  <style>
    .border {
      width: 50vw;
    }
  </style>

  <div class="border">
    <ccdesign-image-card
      url="https://www.something.com"
      image-url="https://images.ctfassets.net/43i5e5k8e66i/2bu4HSFHLHGCEuX4epNQ2h/e4683bf9f90227425467b4427fce4e1e/logo-min.jpg"
      image-alt="CCDesign Web Component Library"
      description="CCDesign Component Library">
    </ccdesign-image-card>
  </div>
`;
