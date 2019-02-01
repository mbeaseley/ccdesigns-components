// Can be used for getting local storage items/ cookies in future
export default(() => {

  function getEnv() {
    if (process.env.NODE_ENV !== 'production') {
      return false;
    } else {
      return true;
    }
  }

  return {
    isProd: getEnv(),
    isDev: !getEnv(),
  };

});
