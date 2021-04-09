const hostname = 'https://findfalcone.herokuapp.com';

export const invoke = (url, options = {}) => {
    console.log('API request ===============>', options)
    return fetch(`${hostname}${url}`, {
      ...options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
  };