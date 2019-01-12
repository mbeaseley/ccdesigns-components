import { regexFormatter } from './regexFormatter';

const mockInputData = '[ { id: \'home\', name: \'Home\', url: \'/\' }, { id: \'portfolio\', name: \'Portfolio\', url: \'/portfolio\'}, { id: \'contact\', name: \'Contact\', url: \'/contact\'} ]';

const expectedOutput = [
  {
    id: 'home',
    name: 'Home',
    url: '/'
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 'contact',
    name: 'Contact',
    url: '/contact'
  }
];

fdescribe('regexFormatter', () => {
  it('should build', () => {
    expect(regexFormatter(mockInputData, /([a-z]+?):/g)).toEqual(expectedOutput);
  });
});
