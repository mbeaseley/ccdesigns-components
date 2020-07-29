import { withKnobs, number, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
export default {
    title: 'Content | Carousel',
    decorators: [withKnobs, withA11y],
};
const carouselStyles = `
  <style>
    .story .carousel,
    .story img {
      min-height: 600px !important;
    }
  </style>
`;
export const Default = () => {
    const dataContent = text('data', `[{'id':'profilePicture','image':'https://images.ctfassets.net/43i5e5k8e66i/3s2QTQy7ryM46G2ewIesO2/1043c4517ce8d6103d71be32d7c90ef2/profile_new-min.jpg','alt':'Image of Michael Beaseley'},{'id':'profilePicture2','image':'https://images.ctfassets.net/43i5e5k8e66i/2tbgM7o5Wk6208QeuQM6o0/955924a78902a6df9df0bef78ae52b53/profile_pic-min.jpg','alt':'Image of Michael Beaseley(2)'},{'id':'profilePicture3','image':'https://images.ctfassets.net/43i5e5k8e66i/57QD3oI2tiUMOmwqyOgI42/fb97e7fb8bafe8bab7641a23c16584f5/profile_station2-min.jpg','alt':'Image of Michael Beaseley(3)'}]`);
    const timeInterval = number('Time Interval (ms)', 3000, {
        range: true,
        min: 500,
        max: 10000,
        step: 500,
    });
    return `
    ${carouselStyles}
    <div class='story'>
      <ccdesign-carousel-new data='${dataContent}' time-interval='${timeInterval}'></ccdesign-carousel-new>
    </div>
  `;
};
