import envType from '../../global/environment';
// Production Data Needed
const prod = {
    dataEndpoint: {
        url: 'http://ccdesign.me.uk/'
    }
};
// Development Data Needed
const dev = {
    dataEndpoint: {
        url: 'http://localhost:4200/'
    }
};
class Environment {
    getEndpoint() {
        if (envType) {
            return prod;
        }
        else {
            return dev;
        }
    }
}
const environment = new Environment();
export default environment;
