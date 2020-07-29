import { dataFetch } from '../../utils/helpers/dataFetch';
import { getConfig } from './contentfulConfig';
function parseData(results) {
    if (results.total === 0) {
        throw new Error('Request for contentful entries responed with no results');
    }
    const entry = results.includes ? results.includes : results.items;
    return entry;
}
const defaultOptions = {
    space: 'master',
    field: 'sys.id',
};
function contentfulDataFetch(object) {
    if (!object.entryId) {
        throw new Error('No Entry ID Found');
    }
    const options = Object.assign(Object.assign({}, defaultOptions), object);
    const config = getConfig(options.space);
    const token = config.deliveryToken;
    const url = `https://cdn.contentful.com/spaces/${config.id}/entries?include=10&sys.id=${options.entryId}&access_token=${token}`;
    return dataFetch(url).then(results => {
        if (!results || Object.keys(results).length === 0) {
            throw new Error('No Content Entry Found');
        }
        return results;
    });
}
export { contentfulDataFetch, parseData };
