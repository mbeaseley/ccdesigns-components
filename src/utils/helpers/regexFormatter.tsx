export function regexFormatter(object: any, regexValue: any) {
  let newData = object.replace(regexValue, '"$1":');
  newData = newData.replace(/'/g, '"');
  return JSON.parse(newData);
}
