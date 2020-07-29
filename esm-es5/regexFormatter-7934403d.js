function regexFormatter(object, regexValue) {
    var newData = object.replace(regexValue, '"$1":');
    newData = newData.replace(/'/g, '"');
    return JSON.parse(newData);
}
export { regexFormatter as r };
