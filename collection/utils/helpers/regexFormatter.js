export function regexFormatter(object, regexValue) {
    let newData = object.replace(regexValue, '"$1":');
    newData = newData.replace(/'/g, '"');
    return JSON.parse(newData);
}
