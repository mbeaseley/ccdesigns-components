export function dataFetch(url, options?:any) {
  return fetch(url, options).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(new Error('error'));
    }
  }, error => {
    return Promise.reject(new Error(error.message));
  })
}
