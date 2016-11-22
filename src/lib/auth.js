const chrome = window.chrome || {};

let TOKEN;

const getAuthToken = () => {

  return new Promise((resolve, reject) => {

    if (TOKEN) {
      return resolve(TOKEN);
    }

    chrome.identity.getAuthToken({
      interactive: true
    }, token => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      } else {
        TOKEN = token;
        return resolve(token);
      }
    });
  });
};

export default getAuthToken;